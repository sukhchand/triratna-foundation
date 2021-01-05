import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginService } from 'src/app/login/services/login.service';
import { ManageUsersService } from '../../../manage-users/services/manage-users.service';
import { ManageEmailService } from '../../services/manage-email.service';

@Component({
  selector: 'send-email',
  templateUrl: './send-email.component.html',
  styleUrls: ['./send-email.component.scss'],
})
export class SendEmailComponent implements OnInit {
  mailForm: FormGroup;
  userDetails: any;
  allUsers: any[] = [];
  dlList: any[] = [];

  constructor(
    private formBuilder: FormBuilder,
    public loginService: LoginService,
    public manageUsersService: ManageUsersService,
    public manageEmailService: ManageEmailService,
  ) {}

  ngOnInit(): void {
    this.getUserId();
    this.getAllUsers();
    this.mailForm = this.formBuilder.group({
      from: ['', Validators.required],
      To: ['', Validators.required],
      cc: [''],
      Subject: ['', Validators.required],
      Body: ['', Validators.required],
    });
  }

  sendMail() {
    console.log('sendMail');
  }

  getUniqueDLNames() {
    this.manageEmailService
      .getUniqueDLNames(JSON.parse(localStorage.getItem('userData')).user.id)
      .subscribe((result) => {
        this.dlList = result.response;
      });
  }

  getAllUsers() {
    this.manageUsersService.getUsers().subscribe((result) => {
      this.allUsers = result.response;
    });
  }

  getUserId() {
    this.loginService
      .getUserById(JSON.parse(localStorage.getItem('userData')).user.id)
      .subscribe(
        (result) => {
          this.mailForm.controls['from'].setValue(result.response.emailId);
          this.userDetails = result.response;
        },
        (error) => {
          console.log(error);
        }
      );
  }

  searchMail(event) {
    console.log(event);
  }
}
