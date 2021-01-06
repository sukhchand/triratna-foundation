import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login/services/login.service';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.scss'],
})
export class EditProfileComponent implements OnInit {
  userRoles: any = false;
  isSuperAdmin: boolean = false;
  isAdmin: boolean = false;

  constructor(public loginService: LoginService) {}

  ngOnInit(): void {
    if (
      JSON.parse(localStorage.getItem('userData')).user.roles[0].includes(
        'sadmin'
      )
    ) {
      this.isSuperAdmin = true;
    }
    if (
      JSON.parse(localStorage.getItem('userData')).user.roles[0].includes(
        'admin'
      )
    ) {
      this.isAdmin = true;
    }
  }
}
