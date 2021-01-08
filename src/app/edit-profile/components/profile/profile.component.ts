import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  ReactiveFormsModule,
  FormControl,
} from '@angular/forms';
import { COUNTRY_DATA } from 'src/app/constant';
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
  userroles: any = ['MONKS', 'DEVOTEE', 'WELLWISHER', 'SPONSOR', 'DONOR', 'ORG'];
  countryData: any = COUNTRY_DATA;
  countryPhoneCode: any;
  profileError: string ='';
  userCredentailsError: string ='';
  userDetails: any;

  constructor(
    private formBuilder: FormBuilder,
    public loginService: LoginService
  ) {}

  ngOnInit() {
    this.getUserId();
    this.profileForm = this.formBuilder.group({
      id: [this.userId, Validators.required],
      firstName: ['', Validators.required],
      middleName: ['', Validators.required],
      lastName: ['', Validators.required],
      userType: ['', Validators.required],
      emailId: ['', Validators.required],
      primaryContactCountryCode: ['', Validators.required],
      primaryContactNo: ['', Validators.required],
      country: ['', Validators.required],
      countryCode: ['', Validators.required],
      street: ['', Validators.required],
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
    this.sortBy('dial_code');
    this.sortBy('name');
  }

  sortBy(field: string) {
    this.countryData.sort((a: any, b: any) => {
        if (a[field] < b[field]) {
            return -1;
        } else if (a[field] > b[field]) {
            return 1;
        } else {
            return 0;
        }
    });
    if(field == 'dial_code') {
      this.countryPhoneCode = [...this.countryData];
    }
}

  primaryCountryCode(code) {
    this.countryData.filter(country => {
      let selctedCode = code.target.value.split(': ')[1];
      if(country.dial_code == selctedCode) {
        this.profileForm.controls['country'].setValue(country.name);
        this.profileForm.controls['countryCode'].setValue(country.code);
      }
    })
  }
  selectedCountry(code) {

    this.countryData.filter(country => {
      let selctedCountry = code.target.value.split(': ')[1];
      if(country.name == selctedCountry) {
        this.profileForm.controls['countryCode'].setValue(country.code);
        this.profileForm.controls['primaryContactCountryCode'].setValue(country.dial_code);
      }
    })
  }


  updateUserDetails() {
    let user = this.profileForm.value;
    user['id'] = this.userId;
    this.loginService.updateUser(this.profileForm.value).subscribe((res) => {
      console.log(res);
    },(error) => {
      this.profileError = error;
    });
  }

  updateCredentialForUser() {
    this.loginService.updateCredentialForUser(this.userCredentailsForm.value).subscribe((res) => {
      console.log(res);
    },(error) => {
      this.userCredentailsError = error;
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
        this.userDetails = result.response;
        let userRoles = this.userDetails.userType.filter(usertype => usertype !== 'SADMIN' || usertype !== 'ADMIN');
        this.profileForm.setValue({
          id: this.userDetails.id,
          firstName: this.userDetails.firstName,
          middleName: this.userDetails.middleName,
          lastName: this.userDetails.lastName,
          userType: userRoles[0],
          emailId: this.userDetails.emailId,
          primaryContactCountryCode: this.userDetails.primaryContactCountryCode,
          primaryContactNo: this.userDetails.primaryContactNo,
          country: this.userDetails.country,
          countryCode: this.userDetails.countryCode,
          street: this.userDetails.street,
          city: this.userDetails.city,
          state: this.userDetails.state,
          zipCode: this.userDetails.zipCode,
        });
        this.userCredentailsForm.controls['roles'].setValue(userRoles[0]);
      },
      (error) => {
        console.log(error);
      }
    );
  }
  public changeRole(event: any) {}
}
