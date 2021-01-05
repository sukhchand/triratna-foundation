import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login/services/login.service';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.scss']
})
export class EditProfileComponent implements OnInit {
  userDetails: any;

  constructor(public loginService: LoginService) { }

  ngOnInit(): void {
    this.getUserId();
  }

  getUserId() {
    this.loginService.getUserById(JSON.parse(localStorage.getItem('userData')).user.id).subscribe(
      (result) => {
        this.userDetails = result.response;
      },
      (error) => {
        console.log(error);
      }
    );
  }

}
