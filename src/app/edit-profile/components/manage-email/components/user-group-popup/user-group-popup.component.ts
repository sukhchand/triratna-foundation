import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ManageEmailService } from '../../services/manage-email.service';
import { ToastrService } from 'ngx-toastr';

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
    private toastr: ToastrService,
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
        this.toastr.success(result.message, '', {
          closeButton: true,
          positionClass: 'toast-top-center',
        });
        this.activeModal.close();
      }, error => {
        this.toastr.error(error, '', {
          closeButton: true,
          positionClass: 'toast-top-center',
        });
      });
  }
}
