import { LoginService } from './login/services/login.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'triratna-foundation';

  constructor(public loginService: LoginService) {
  }

  ngOnInit() {
    this.loginService.autoLogin();
  }
}
