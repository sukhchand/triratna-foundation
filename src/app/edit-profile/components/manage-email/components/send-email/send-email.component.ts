import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbTypeahead } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { Observable, Subject } from 'rxjs';
import {
  debounceTime,
  distinctUntilChanged,
  filter,
  map,
} from 'rxjs/operators';
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
  allUsers: any[] = [];
  dlList: any[] = [];
  usersList: any[] = [];
  toList = [];
  ccList = [];
  @ViewChild('instance', { static: true }) instance: NgbTypeahead;
  @ViewChild('input') inputEl;
  focus$ = new Subject<string>();
  click$ = new Subject<string>();
  search = (text$: Observable<string>) =>
    text$.pipe(
      debounceTime(200),
      distinctUntilChanged(),
      map((term) =>
        term.length < 2
          ? []
          : this.usersList
              .filter((v) => v.toLowerCase().indexOf(term.toLowerCase()) > -1)
              .slice(0, 10)
      )
    );

  constructor(
    private formBuilder: FormBuilder,
    public loginService: LoginService,
    public manageUsersService: ManageUsersService,
    public manageEmailService: ManageEmailService,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    this.getAllUsers();
    this.getUniqueDLNames();
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
        this.dlList.forEach((group) => {
          this.usersList.push(group);
          this.usersList.sort();
        });
      }, error => {
        this.toastr.error(error, '', {
          closeButton: true,
          positionClass: 'toast-top-center',
        });
      });
  }

  getAllUsers() {
    this.manageUsersService.getUsers().subscribe((result) => {
      this.allUsers = result.response;
      this.allUsers.forEach((user) => {
        this.usersList.push(user.emailId);
        this.usersList.sort();
      });
    }, error => {
      this.toastr.error(error, '', {
        closeButton: true,
        positionClass: 'toast-top-center',
      });
    });
  }

  close(item, fieldType) {
    if (fieldType == 'to') {
      this.toList.splice(this.toList.indexOf(item), 1);
    }
    if (fieldType == 'cc') {
      this.ccList.splice(this.toList.indexOf(item), 1);
    }
    this.usersList.push(item);
    this.usersList.sort();
    this.inputEl.nativeElement.focus();
  }

  selected($e, fieldType) {
    $e.preventDefault();
    if (fieldType == 'to') {
      this.toList.push($e.item);
    }
    if (fieldType == 'cc') {
      this.ccList.push($e.item);
    }
    this.usersList = this.usersList.filter((obj) => obj !== $e.item);
    this.inputEl.nativeElement.value = '';
  }
}
