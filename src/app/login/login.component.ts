import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { ModalDismissReasons, NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class LoginComponent implements OnInit {

  constructor(private modalService: NgbModal, public activeModal: NgbActiveModal,private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    localStorage.setItem("isAuthenticated", 'true');
    this.router.navigate([this.router.url]);
    this.activeModal.close(true);
  }

}
