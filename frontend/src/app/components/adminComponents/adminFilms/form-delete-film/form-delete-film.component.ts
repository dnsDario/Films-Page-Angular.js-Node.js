import { Component } from '@angular/core';
import { FormGroup, FormsModule, ReactiveFormsModule, FormBuilder, FormControl, Validators } from '@angular/forms';
import { FilmService } from '../../../../services/film.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form-delete-film',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './form-delete-film.component.html',
  styleUrl: './form-delete-film.component.css'
})
export class FormDeleteFilmComponent {
  
  deleterFilm: FormGroup = this.formBuilder.group({
    id: new FormControl(null, [Validators.required]),
  });

  constructor(
    private formBuilder: FormBuilder,
    private filmService: FilmService,
    private router: Router
  ){}
  
  deleteFilm(){
    const id: string = this.deleterFilm.get('id')?.value
    this.filmService.deleteOne(id).subscribe({
      next: (res: any) => {
        alert('La siguiente pelicula fue eliminada: '+ res.filmDeleted.title),
        this.router.navigate(['/adminFilms']);
        console.log(res)
      },
      error: (err) => console.log('error al borrar la película en front'),
    });
  }  
}
