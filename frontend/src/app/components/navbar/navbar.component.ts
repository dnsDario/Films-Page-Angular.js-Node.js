import { Component, OnInit } from '@angular/core';
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
export class NavbarComponent implements OnInit{
  soyAdmin?: boolean;
  hayToken?: boolean;

  constructor(
    private cookie: CookieService,
    private userService: UserService
  ) {
  }

  ngOnInit(): void {
    this.cookie.get('token')? this.hayToken = true: this.hayToken = false
    this.cookie.get('role') === 'admin'? this.soyAdmin = true : this.soyAdmin = false       

    this.userService.getRoleObservable().subscribe(role => {
      this.soyAdmin = role === 'admin';
      console.log('este es role', role)
    });
    this.userService.getTokenObservable().subscribe(token => {
      token? this.hayToken = true: this.hayToken = false;
      console.log('este es token', token)
    });
  }
  

  doLogout() {
    this.userService.logout()   
  }
}
