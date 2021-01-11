import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  ReactiveFormsModule,
  FormControl,
} from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
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
  userDetails: any;

  constructor(
    private formBuilder: FormBuilder,
    public loginService: LoginService,
    private toastr: ToastrService
  ) {}

  ngOnInit() {
    this.getUserId();
    this.profileForm = this.formBuilder.group({
      id: [this.userId, Validators.required],
      firstName: ['', Validators.required],
      middleName: [''],
      lastName: ['', Validators.required],
      userType: ['', Validators.required],
      emailId: ['', Validators.required],
      primaryContactCountryCode: ['', Validators.required],
      primaryContactNo: ['', Validators.required],
      country: ['', Validators.required],
      countryCode: ['', Validators.required],
      street: [''],
      city: [''],
      state: [''],
      zipCode: [''],
    });
    this.userCredentailsForm = this.formBuilder.group({
      id: [this.userId, Validators.required],
      username: ['', Validators.required],
      password: ['', Validators.required],
      newPassword: ['', Validators.required],
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
    this.loginService.updateUser(this.profileForm.value).subscribe((result) => {
      this.toastr.success(result.message, '', {
        closeButton: true,
        positionClass: 'toast-top-center',
      });
    },(error) => {
      this.toastr.error(error, '', {
        closeButton: true,
        positionClass: 'toast-top-center',
      });
    });
  }

  updateCredentialForUser() {
    this.loginService.updateCredentialForUser(this.userCredentailsForm.value).subscribe((result) => {
      this.toastr.success(result.message, '', {
        closeButton: true,
        positionClass: 'toast-top-center',
      });
    },(error) => {
      this.toastr.error(error, '', {
        closeButton: true,
        positionClass: 'toast-top-center',
      });
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
        let userRoles = this.userDetails.user.userType.filter(usertype => usertype !== 'SADMIN' || usertype !== 'ADMIN');
        this.profileForm.setValue({
          id: this.userDetails.user.id,
          firstName: this.userDetails.user.firstName,
          middleName: this.userDetails.user.middleName,
          lastName: this.userDetails.user.lastName,
          userType: userRoles[0],
          emailId: this.userDetails.user.emailId,
          primaryContactCountryCode: this.userDetails.user.primaryContactCountryCode,
          primaryContactNo: this.userDetails.user.primaryContactNo,
          country: this.userDetails.user.country,
          countryCode: this.userDetails.user.countryCode,
          street: this.userDetails.user.street,
          city: this.userDetails.user.city,
          state: this.userDetails.user.state,
          zipCode: this.userDetails.user.zipCode,
        });
        this.userCredentailsForm.controls['roles'].setValue(userRoles[0]);
        this.userCredentailsForm.controls['username'].setValue(this.userDetails.userCred.username);
      },
      (error) => {
        this.toastr.error(error, '', {
          closeButton: true,
          positionClass: 'toast-top-center',
        });
      }
    );
  }
  public changeRole(event: any) {}
}
