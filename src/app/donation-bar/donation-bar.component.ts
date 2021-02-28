import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { LoginComponent } from '../login/login.component';

@Component({
  selector: 'donation-bar',
  templateUrl: './donation-bar.component.html',
  styleUrls: ['./donation-bar.component.scss']
})
export class DonationBarComponent implements OnInit {
  public isAuthenticated: boolean = false;

  constructor(private modalService: NgbModal) { }

  ngOnInit(): void {
    this.isAuthenticated = JSON.parse(localStorage.getItem('userData')) ? true: false;
  }

  openLoginPopup() {
    this.modalService
      .open(LoginComponent, { centered: true })
      .result.then((data) => {
        // if (data == 'Login') {
        //   this.isAuthenticated = true;
        // }
      });
  }

}
