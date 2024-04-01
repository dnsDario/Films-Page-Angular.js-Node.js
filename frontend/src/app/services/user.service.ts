import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserLoginData } from '../interfaces/dto/user-login-data';
import { UserRegisterData } from '../interfaces/dto/user-register-data';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient, private cookies: CookieService) { }
  url: string = 'http://localhost:3000/api/users'
  
  login(data: UserLoginData){
    return this.http.post(`${this.url}/login`, data)
  }
  register(data: UserRegisterData){
    return this.http.post(`${this.url}/signup`, data)
  }
  setTokenSetRole(token: string, role: string){
    this.cookies.set('token', token),
    this.cookies.set('role', role)
  }
  logout(){
    this.cookies.delete('token'),
    this.cookies.delete('role')
  }
  deleteUser(id:string , token:string){
    this.http.delete(`${this.url}/login/:${id}?token=${this.cookies.get('token')}`)
  }
}
