import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ManageEmailService } from '../../services/manage-email.service';

@Component({
  selector: 'user-group-popup',
  templateUrl: './user-group-popup.component.html',
  styleUrls: ['./user-group-popup.component.scss'],
})
export class UserGroupPopupComponent implements OnInit {
  userGroupForm: FormGroup;
  userDetails: any;

  constructor(
    public activeModal: NgbActiveModal,
    private formBuilder: FormBuilder,
    public manageEmailService: ManageEmailService
  ) {}

  ngOnInit(): void {
    this.userGroupForm = this.formBuilder.group({
      dlName: ['', Validators.required],
      createdBy: [
        JSON.parse(localStorage.getItem('userData')).user.id,
        Validators.required,
      ],
    });
  }

  onSubmit() {
    this.manageEmailService
      .createDL(this.userGroupForm.value)
      .subscribe((result) => {
        this.activeModal.close();
      });
  }
}
