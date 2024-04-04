import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { UserService } from '../../../../services/user.service';

@Component({
  selector: 'app-form-delete-user',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './form-delete-user.component.html',
  styleUrl: './form-delete-user.component.css'
})
export class FormDeleteUserComponent {
  deleterUser: FormGroup = this.formBuilder.group({
    id: new FormControl(null, [Validators.required]),
  });

  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService,
  ){} 

  deleteUser(){
    const id: string = this.deleterUser.get('id')?.value
    this.userService.deleteUser(id).subscribe({
      next: (res:any) => {
        alert('El siguiente usuario fue eliminado: '+ res.userDeleted.name),
        console.log(res)
      },
      error: (err) => console.log('error al borrar el usuario'),
    });
  }  
}


