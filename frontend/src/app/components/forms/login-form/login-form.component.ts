import { Component } from '@angular/core';
import { FormBuilder,FormControl,FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { UserLoginData } from '../../../interfaces/dto/user-login-data';
import { UserService } from '../../../services/user.service';

@Component({
  selector: 'app-login-form',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './login-form.component.html',
  styleUrl: './login-form.component.css',
})
export class LoginFormComponent {
  hidePassword: boolean = true;
  loginForm: FormGroup = this.formBuilder.group({
    email: new FormControl(null, [Validators.required, Validators.email]),
    password: new FormControl(null, [Validators.required]),
  });

  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService
  ) {}

  doLogin() {
    const data: UserLoginData = {
      email: this.loginForm.get('email')?.value,
      password: this.loginForm.get('password')?.value,
    };
    this.userService.login(data).subscribe({
      next: (res: any) => {
        this.userService.setTokenSetRole(res.token, res.role),
        console.log(res)},
        
      error: (err) => console.log(err),
    });
  }
}
