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
  formType: string = 'login';
  public userroles: any = ['ADMIN', 'STUDENT', 'TEACHER'];

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
    if(this.formType == 'login') {
      this.login();
    } else if(this.formType =='register') {
      this.signup();
    } else if(this.formType == 'forgotPassword') {
      this.forgotPassword();
    }
  }

  public signup() {
    this.loginService.signup(this.signupForm.value).subscribe(result => {
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
        this.activeModal.close("login");
      },(error) => {
        if(error.error.message[0] == "Not found") {
          this.activeModal.close("login");
          this.router.navigate(['edit-profile']);
        }
      });
    },(error) => {
      console.log(error);
    });
  }

  changeForm(formType:string) {
    this.formType = formType;
    if(this.formType == 'register') {
      this.signupForm = this.formBuilder.group({
        username: ['', Validators.required],
        password: ['', Validators.required],
        newPassword: ['', Validators.required],
        roles: ['', Validators.required]
      });
    } else if(this.formType == 'forgotPassword') {
      this.forgotPasswordForm = this.formBuilder.group({
        email: ['', Validators.required],
        confirmemail: ['', Validators.required]
      });
    }

  }
  public changeRole(event: any) {}
}
