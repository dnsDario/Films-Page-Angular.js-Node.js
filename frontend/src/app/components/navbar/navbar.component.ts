import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LoginComponent } from '../../pages/login/login.component';
import { RegisterComponent } from '../../pages/register/register.component';
import { CookieService } from 'ngx-cookie-service';
import { UserService } from '../../services/user.service';



@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

  constructor(
    private cookieService: CookieService,
    private userService: UserService
  ) {}

  soyAdmin: string = this.cookieService.get('role')

  doLogout() {
    this.userService.logout()   
  }
}
