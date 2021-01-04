import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginService } from 'src/app/login/services/login.service';

@Component({
  selector: 'send-email',
  templateUrl: './send-email.component.html',
  styleUrls: ['./send-email.component.scss']
})
export class SendEmailComponent implements OnInit {

  mailForm: FormGroup;
  userDetails: any;

  constructor(private formBuilder: FormBuilder, public loginService: LoginService) { }

  ngOnInit(): void {
    this.getUserId();
    this.mailForm = this.formBuilder.group({
      from: ['', Validators.required],
      To: ['', Validators.required],
      cc: [''],
      Subject: ['', Validators.required],
      Body: ['', Validators.required]
    });
  }

  sendMail() {
    console.log("sendMail");
  }

  getUserId() {
    this.loginService.getUserById(JSON.parse(localStorage.getItem('userData')).user.id).subscribe(
      (result) => {
        this.mailForm.controls['from'].setValue(result.response.emailId);
        this.userDetails = result.response;
      },
      (error) => {
        console.log(error);
      }
    );
  }

}
