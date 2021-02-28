import { LoginService } from './login/services/login.service';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'triratna-foundation';
  hideCommonFooter: boolean = false;

  constructor(public loginService: LoginService, private router: Router) {
    router.events.subscribe((val) => {
      if(router.url.includes('edit-profile')){
        this.hideCommonFooter = true;
      } else {
        this.hideCommonFooter = false;
      }
    });
  }

  ngOnInit() {
    this.loginService.autoLogin();

  }
}
