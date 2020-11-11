import { LoginComponent } from './../login/login.component';
import { Component, OnInit } from '@angular/core';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  closeResult: string;
  selectedCountry: string = "India";
  countryList:string[] = [];
  isAuthenticated: boolean = JSON.parse(localStorage.getItem("isAuthenticated"));
  constructor(private modalService: NgbModal, private router: Router) { }

  ngOnInit() {
    this.countryList = ["India", "Nepal", "USA"];
  }
  openLoginPopup() {
    this.modalService.open(LoginComponent, { centered: true }).result.then((data)=> {
      if(data) {
        this.isAuthenticated = true;
      }
    });
  }

  signOut() {
    localStorage.removeItem("isAuthenticated");
    this.isAuthenticated = false;
    this.router.navigate(['']);
  }

}
