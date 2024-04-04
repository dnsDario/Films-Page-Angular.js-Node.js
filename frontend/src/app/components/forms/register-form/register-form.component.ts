import { Component } from '@angular/core';
import { FormBuilder,FormControl,FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { UserRegisterData } from '../../../interfaces/dto/user-register-data';
import { UserService } from '../../../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register-form',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './register-form.component.html',
  styleUrl: './register-form.component.css'
})

export class RegisterFormComponent {
  hidePassword: boolean = true;
  registerForm: FormGroup = this.formBuilder.group({
    name: new FormControl(null, [Validators.required]),
    email: new FormControl(null, [Validators.required, Validators.email]),
    password: new FormControl(null, [Validators.required]),
    repetirPassword: new FormControl(null, [Validators.required]),
  });

  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService,
    private router: Router
    ){}

    doRegister(){
      const data: UserRegisterData = {
        name: this.registerForm.get('name')?.value,
        email: this.registerForm.get('email')?.value,
        password: this.registerForm.get('password')?.value,
        repetirPassword: this.registerForm.get('repetirPassword')?.value
      };
      this.userService.register(data).subscribe({
        next: (res: any) => {
          alert('Enhorabuena, se ha registrado con exito'),
          this.router.navigate(['/login']);
          console.log(res)},
        error: (err) => console.log(err)
      });
    }
}


