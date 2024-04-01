import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { UserLoginData } from '../interfaces/dto/user-login-data';
import { UserRegisterData } from '../interfaces/dto/user-register-data';
import { CookieService } from 'ngx-cookie-service';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService{

  private roleSubject: Subject<string> = new Subject<string>()
  private tokenSubject: Subject<string> = new Subject<string>()

  constructor(
    private http: HttpClient, 
    private cookies: CookieService,
    
    ) {
      const role = this.cookies.get('role')
      this.roleSubject.next(role)
      const token = this.cookies.get('token')
      this.tokenSubject.next(token)
     }

    getRoleObservable(): Observable<string>{
      return this.roleSubject.asObservable()
    }
    getTokenObservable(): Observable<string>{
      return this.tokenSubject.asObservable()
    }

  url: string = 'http://localhost:3000/api/users'  
  
  login(data: UserLoginData){
    return this.http.post(`${this.url}/login`, data)
  }
  register(data: UserRegisterData){
    return this.http.post(`${this.url}/signup`, data)
  }
  setTokenSetRole(token: string, role: string){
    this.cookies.set('token', token),
    this.cookies.set('role', role),
    this.roleSubject.next(role),
    this.tokenSubject.next(token)
  }
  logout(){
    this.cookies.delete('token'),
    this.cookies.delete('role'),
    this.roleSubject.next('')
    this.tokenSubject.next('')
  }
  deleteUser(id:string , token:string){
    this.http.delete(`${this.url}/login/:${id}?token=${this.cookies.get('token')}`)
  }
}
