import { Component } from '@angular/core';
import { TableUsersComponent } from '../../components/adminComponents/adminUsers/table-users/table-users.component';
import { FormDeleteUserComponent } from '../../components/adminComponents/adminUsers/form-delete-user/form-delete-user.component';

@Component({
  selector: 'app-admin-users',
  standalone: true,
  imports: [TableUsersComponent, FormDeleteUserComponent],
  templateUrl: './admin-users.component.html',
  styleUrl: './admin-users.component.css'
})
export class AdminUsersComponent {

}
