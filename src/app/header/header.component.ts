import { LoginComponent } from './../login/login.component';
import { Component, OnInit, ViewChild, ElementRef, Renderer2 } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';
import { LoginService } from '../login/services/login.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  rolesPermission: boolean = false;
  closeResult: string;
  selectedCountry: string = 'India';
  countryList: string[] = [];
  isAuthenticated: boolean = JSON.parse(localStorage.getItem('userData'));

  @ViewChild("menuList") menuList: ElementRef;

  constructor(
    private modalService: NgbModal,
    private router: Router,
    public loginService: LoginService,
    private renderer: Renderer2
  ) {
    router.events.subscribe((val) => {
      if(this.menuList.nativeElement.classList.contains("show")) {
        this.renderer.removeClass(this.menuList.nativeElement, "show");
      }
    });
  }

  ngOnInit() {

    if(JSON.parse(localStorage.getItem('userData'))?.user.roles) {
      if (
        JSON.parse(localStorage.getItem('userData'))?.user.roles[0].includes(
          'SADMIN'
        ) ||
        JSON.parse(localStorage.getItem('userData'))?.user.roles[0].includes(
          'ADMIN'
        )
      ) {
        this.rolesPermission = true;
      }
    }
    this.countryList = ['India', 'Nepal', 'USA'];
  }
  openLoginPopup() {
    this.modalService
      .open(LoginComponent, { centered: true })
      .result.then((data) => {
        if (data == 'Login') {
          this.isAuthenticated = true;
        }
      });
  }

  signOut() {
    this.loginService.signOut();
    if (!JSON.parse(localStorage.getItem('userData'))) {
      this.isAuthenticated = false;
    }
    window.location.reload();
  }
}
