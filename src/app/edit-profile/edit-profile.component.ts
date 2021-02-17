import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
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
  showSubMenu: boolean = false;

  constructor(public loginService: LoginService, private router: Router) {
    router.events.subscribe((val) => {
      this.showSubMenu = false;
    });
  }

  ngOnInit(): void {
    if(JSON.parse(localStorage.getItem('userData')).user.roles) {
      if (
        JSON.parse(localStorage.getItem('userData')).user.roles.includes(
          'SADMIN'
        )
      ) {
        this.isSuperAdmin = true;
      }
      if (
        JSON.parse(localStorage.getItem('userData')).user.roles.includes(
          'ADMIN'
        )
      ) {
        this.isAdmin = true;
      }
    }
  }
}
