import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { ColumnMode, DatatableComponent } from '@swimlane/ngx-datatable';
import { ManageUsersService } from './services/manage-users.service';

@Component({
  selector: 'app-manage-users',
  templateUrl: './manage-users.component.html',
  styleUrls: ['./manage-users.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class ManageUsersComponent implements OnInit {
  ColumnMode = ColumnMode;
  users: any;
  timeout: any;
  columns: any[] = [];
  searchData: any[] = [];
  isActivate: boolean = false;

  @ViewChild(DatatableComponent) table: DatatableComponent;

  constructor(public manageUsersService: ManageUsersService) {}

  ngOnInit(): void {
    this.columns = [
      { name: 'First Name' },
      { name: 'Middle Name' },
      { name: 'Last Name' },
      { name: 'User Type' },
      {
        prop: 'Activate',
        name: 'Activate',
        sortable: false,
        canAutoResize: false,
        draggable: false,
        resizable: false,
        headerCheckboxable: true,
        checkboxable: true,
        width: 30,
      },
      {
        name: 'Roles',
        sortable: false,
        canAutoResize: false,
        draggable: false,
        resizable: false,
        headerCheckboxable: true,
        checkboxable: true,
        width: 30,
      },
      { name: 'EmailId' },
      { name: 'Contact Number' },
      { name: 'Country' },
      { name: 'Street' },
      { name: 'City' },
      { name: 'State' },
      { name: 'Zip Code' },
      { name: 'Created Date' },
    ];
    this.getUsers();
  }

  getUsers() {
    this.manageUsersService.getUsers().subscribe((result) => {
      result.response.forEach(users => {
        if(users.userType.indexOf("SADMIN") > -1){
          users["isSuperAdmin"] = true;
        }
        if(users.userType.indexOf("ADMIN") > -1){
          users["isAdmin"] = true;
        }
      });
      this.users = result.response;
      this.searchData = [...this.users];
    });
  }

  getRowHeight(row) {
    return row.height;
  }

  onPage(event) {
    clearTimeout(this.timeout);
    this.timeout = setTimeout(() => {
      console.log('paged!', event);
    }, 100);
  }

  updateFilter(event, fieldName) {
    const val = event.target.value.toLowerCase();
    let temp;

    if ((fieldName = 'firstName')) {
      temp = this.searchData.filter(function (d) {
        return d.firstName.toLowerCase().indexOf(val) !== -1 || !val;
      });
    }
    if ((fieldName = 'userType')) {
      temp = this.searchData.filter(function (d) {
        return d.userType.toLowerCase().indexOf(val) !== -1 || !val;
      });
    }
    if ((fieldName = 'country')) {
      temp = this.searchData.filter(function (d) {
        return d.country.toLowerCase().indexOf(val) !== -1 || !val;
      });
    }
    this.users = temp;
    this.table.offset = 0;
  }

  isActive(event, user) {
    this.manageUsersService
      .activeUser(user, event.target.checked)
      .subscribe((result) => {
        console.log(result);
      });
  }

  assignRoles(event, user, roleType) {
    if (event.target.checked){
      this.manageUsersService.roleProvider(JSON.parse(localStorage.getItem('userData')).user.id, user.id, roleType).subscribe(result => {
        console.log(result);
      });
    } else {
      this.manageUsersService.removeRole(JSON.parse(localStorage.getItem('userData')).user.id, user.id, roleType).subscribe(result => {
        console.log(result);
      });
    }

  }
}
