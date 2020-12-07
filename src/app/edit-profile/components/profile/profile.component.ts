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
    this.countryPhoneCode = this.countryData;
}

  primaryCountryCode(code) {
    console.log(code);
  }
  secondaryCountryCode(code) {
    console.log(code);
  }
  selectedCountry(code) {

    this.countryData.filter(country => {
      let selctedCountry = code.target.value.split(': ')[1];
      if(country.name == selctedCountry) {
        this.profileForm.controls['countryCode'].setValue(country.code);
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
        console.log(result);
      },
      (error) => {
        console.log(error);
      }
    );
  }
  public changeRole(event: any) {}
}
