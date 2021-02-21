import { LoginService } from './services/login.service';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

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
    public loginService: LoginService,
    private toastr: ToastrService
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
      this.toastr.success(result.message, '', {
        closeButton: true,
        positionClass: 'toast-top-center',
      });
      this.activeModal.close("signup");
    }, (error) => {
      this.error = error;
    })
  }

  public forgotPassword() {
    console.log("forgotPassword");
  }

  public login() {
    this.loginService.login(this.loginForm.value).subscribe(response => {
      this.loginService.getUserById(response.user.id).subscribe(result => {
        window.location.reload();
        this.toastr.success(result.message, '', {
          closeButton: true,
          positionClass: 'toast-top-center',
        });
        this.activeModal.close("Login");
      },(error) => {
        if(error) {
          this.activeModal.close("Login");
          this.router.navigateByUrl("/edit-profile/profile");
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
        confirmPassword: ['', Validators.required],
        usertype: ['', Validators.required],
        name: ['', Validators.required],
        email: ['', [Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]],
        contactNumber: ['', Validators.required]
      });
    } else if(this.formType == 'Forgot Password') {
      this.forgotPasswordForm = this.formBuilder.group({
        email: ['', [Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]],
        confirmemail: ['', [Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]]
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

  validateConfirmEmail() {
    if (this.forgotPasswordForm.controls['email'].value===this.forgotPasswordForm.controls['confirmemail'].value) {
      this.forgotPasswordForm.controls['confirmemail'].setErrors(null);
    } else {
      this.forgotPasswordForm.controls['confirmemail'].setErrors({'invalid': true, touched: true});
    }
  }

  validateConfirmPassword() {
    if (this.signupForm.controls['password'].value===this.signupForm.controls['confirmPassword'].value) {
      this.signupForm.controls['confirmPassword'].setErrors(null);
    } else {
      this.signupForm.controls['confirmPassword'].setErrors({'invalid': true, touched: true});
    }
  }
}
