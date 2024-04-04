import { Component, OnInit } from '@angular/core';
import { User } from '../../../../interfaces/user';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { UserService } from '../../../../services/user.service';

@Component({
  selector: 'app-table-users',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './table-users.component.html',
  styleUrl: './table-users.component.css'
})
export class TableUsersComponent implements OnInit{
  users: User[] = []
  usersFiltered: User[] = []

  searcherUser: FormGroup = this.formBuilder.group({
    user: new FormControl(null, [Validators.required])
  })

  constructor(
    private userService: UserService,
    private formBuilder: FormBuilder
  ){}

  ngOnInit(): void {
    this.userService.findAllUsers().subscribe({
      next:(res:any) =>{
        this.users = res as User[],
        console.log('aqui films',this.users)
      },
      error:(err:any) => console.log('error al cargar las peliculas')
    })
  }

  searchUser(){
    const nombreFiltro = this.searcherUser.get('user')?.value;
    console.log('nombreFiltro', nombreFiltro)
    this.usersFiltered = this.users.filter((i)=> i.name.toLowerCase().includes(nombreFiltro))
    console.log('este es el filtrado de users',this.usersFiltered)
  }

}
