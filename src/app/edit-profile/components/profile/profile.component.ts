import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginService } from 'src/app/login/services/login.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  profileForm: FormGroup;
  userId: string = JSON.parse(localStorage.getItem("userData")).user.id;

  constructor(private formBuilder: FormBuilder, public loginService: LoginService) { }

  ngOnInit() {
    this.profileForm = this.formBuilder.group({
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
      zipCode: ['', Validators.required]
    });
  }

  onSubmit() {
    let user =this.profileForm.value;
    user["id"] = this.userId;
    this.loginService.updateUser(this.profileForm.value).subscribe((res) => {
      debugger;
    });

  }

  onlyNumberKey(event) {
    return (event.charCode == 8 || event.charCode == 0) ? null : event.charCode >= 48 && event.charCode <= 57;
}

getUserId() {
  this.loginService.getUserById(this.userId).subscribe(result => {
    console.log(result);
  },(error) => {
    console.log(error);
  });
}

}
