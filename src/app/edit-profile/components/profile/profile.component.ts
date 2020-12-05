import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  ReactiveFormsModule,
  FormControl,
} from '@angular/forms';
import { LoginService } from 'src/app/login/services/login.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {
  profileForm: FormGroup;
  userCredentailsForm: FormGroup;
  userId: string = JSON.parse(localStorage.getItem('userData')).user.id;
  userroles: any = ['ADMIN', 'STUDENT', 'TEACHER'];

  constructor(
    private formBuilder: FormBuilder,
    public loginService: LoginService
  ) {}

  ngOnInit() {
    this.profileForm = this.formBuilder.group({
      id: [this.userId, Validators.required],
      firstName: ['', Validators.required],
      middleName: ['', Validators.required],
      lastName: ['', Validators.required],
      displayName: ['', Validators.required],
      userType: ['', Validators.required],
      emailId: ['', Validators.required],
      primaryContactCountryCode: ['', Validators.required],
      secondaryContactCountryCode: ['', Validators.required],
      primaryContactNo: ['', Validators.required],
      secondaryContactNo: ['', Validators.required],
      country: ['', Validators.required],
      countryCode: ['', Validators.required],
      street: ['', Validators.required],
      streetLine: ['', Validators.required],
      city: ['', Validators.required],
      state: ['', Validators.required],
      zipCode: ['', Validators.required],
    });
    this.userCredentailsForm = this.formBuilder.group({
      id: [this.userId, Validators.required],
      username: ['', Validators.required],
      password: ['', Validators.required],
      newPassword: [''],
      roles: ['', Validators.required],

    });
  }

  updateUserDetails() {
    let user = this.profileForm.value;
    user['id'] = this.userId;
    this.loginService.updateUser(this.profileForm.value).subscribe((res) => {
      console.log(res);
    });
  }

  updateCredentialForUser() {
    this.loginService.updateCredentialForUser(this.userCredentailsForm.value).subscribe((res) => {
      console.log(res);
    });

  }

  onlyNumberKey(event) {
    return event.charCode == 8 || event.charCode == 0
      ? null
      : event.charCode >= 48 && event.charCode <= 57;
  }

  getUserId() {
    this.loginService.getUserById(this.userId).subscribe(
      (result) => {
        console.log(result);
      },
      (error) => {
        console.log(error);
      }
    );
  }
  public changeRole(event: any) {}
}
