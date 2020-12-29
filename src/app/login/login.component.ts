import { LoginService } from './services/login.service';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import {
  ModalDismissReasons,
  NgbActiveModal,
  NgbModal,
} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  encapsulation: ViewEncapsulation.None,
  providers: [LoginService]
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  signupForm: FormGroup;
  forgotPasswordForm: FormGroup;
  formType: string = 'Login';
  error: string = '';
  userroles: any = ['MONKS', 'DEVOTEE', 'WELLWISHER', 'SPONSOR', 'DONOR', 'ORG'];


  constructor(
    private modalService: NgbModal,
    public activeModal: NgbActiveModal,
    private router: Router,
    private formBuilder: FormBuilder,
    public loginService: LoginService
  ) {}

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  onSubmit(): void {
    if(this.formType == 'Login') {
      this.login();
    } else if(this.formType =='Register') {
      this.signup();
    } else if(this.formType == 'Forgot Password') {
      this.forgotPassword();
    }
  }

  public signup() {
    let registeredData = new FormData();
    Object.keys(this.signupForm.value).forEach((signupFormKey,index) => {
      registeredData.append(signupFormKey,this.signupForm.value[signupFormKey]);
    });
    this.loginService.signup(registeredData).subscribe(result => {
      this.activeModal.close("signup");
    }, (error) => {
      console.log(error);
    })
  }

  public forgotPassword() {
    console.log("forgotPassword");
  }

  public login() {
    this.loginService.login(this.loginForm.value).subscribe(response => {
      this.loginService.getUserById(response.user.id).subscribe(result => {
        console.log(response);
        this.router.navigate([this.router.url]);
        this.activeModal.close("Login");
      },(error) => {
        if(error) {
          this.activeModal.close("Login");
          this.router.navigateByUrl("/edit-profile");
          // this.router.navigate(['edit-profile']);
        }
      });
    },(error) => {
      this.error = error;
    });
  }

  changeForm(formType:string) {
    this.formType = formType;
    this.error ='';
    if(this.formType == 'Register') {
      this.signupForm = this.formBuilder.group({
        userName: ['', Validators.required],
        password: ['', Validators.required],
        newPassword: ['', Validators.required],
        usertype: ['', Validators.required],
        name: ['', Validators.required],
        email: ['', Validators.required],
        contactNumber: ['', Validators.required]
      });
    } else if(this.formType == 'Forgot Password') {
      this.forgotPasswordForm = this.formBuilder.group({
        email: ['', Validators.required],
        confirmemail: ['', Validators.required]
      });
    }

  }
  public changeRole(event: any) {}

  numberOnly(event): boolean {
    const charCode = (event.which) ? event.which : event.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
      return false;
    }
    return true;

  }
}
