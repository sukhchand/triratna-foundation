import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { ManageUsersService } from '../../services/manage-users.service';

@Component({
  selector: 'app-assign-confirmation',
  templateUrl: './assign-confirmation.component.html',
  styleUrls: ['./assign-confirmation.component.scss']
})
export class AssignConfirmationComponent implements OnInit {
  @Input() data: any = '';
  assigningText: string = 'assigning';
  roleType: string = '';
  userName: string;

  constructor(public activeModal: NgbActiveModal, public manageUsersService: ManageUsersService, private toastr: ToastrService) { }

  ngOnInit(): void {
    if(this.data.event.target.checked) {
      this.assigningText = 'assigning';
    } else {
      this.assigningText = 'unassigning';
    }
    this.roleType = this.data.roleType;
    this.userName = this.data.user.firstName;
  }

  onSuccess() {
    if (this.data.event.target.checked){
        this.manageUsersService.roleProvider(JSON.parse(localStorage.getItem('userData')).user.id, this.data.user.id, this.roleType).subscribe(result => {
          this.toastr.success(result.message, '', {
            closeButton: true,
            positionClass: 'toast-top-center',
          });
          this.activeModal.close('success');
        }, error=>{
          this.toastr.error(error, '', {
            closeButton: true,
            positionClass: 'toast-top-center',
          });
        });
      } else {
        this.manageUsersService.removeRole(JSON.parse(localStorage.getItem('userData')).user.id, this.data.user.id, this.roleType).subscribe(result => {
          this.toastr.success(result.message, '', {
            closeButton: true,
            positionClass: 'toast-top-center',
          });
          this.activeModal.close('success');
        }, error=>{
          this.toastr.error(error, '', {
            closeButton: true,
            positionClass: 'toast-top-center',
          });
        });
      }

  }
}
