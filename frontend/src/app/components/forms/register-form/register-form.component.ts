import { Component } from '@angular/core';
import { AbstractControl, FormBuilder,FormControl,FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { UserRegisterData } from '../../../interfaces/dto/user-register-data';
import { UserService } from '../../../services/user.service';
import { Router } from '@angular/router';
import { register } from 'module';

@Component({
  selector: 'app-register-form',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './register-form.component.html',
  styleUrl: './register-form.component.css'
})

export class RegisterFormComponent {

  registerForm: FormGroup = this.formBuilder.group({
    name: new FormControl(null, [Validators.required]),
    email: new FormControl(null, [Validators.required, Validators.email, Validators.pattern('^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$')]),
    password: new FormControl(null, [Validators.required, Validators.pattern('^[a-zA-Z0-9]+[a-zA-Z0-9]{7,}$')]),
    repetirPassword: new FormControl(null, [Validators.required])
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


