
import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { FilmService } from '../../../../services/film.service';
import { FilmCreateData } from '../../../../interfaces/dto/film-create-data';

@Component({
  selector: 'app-form-create-film',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './form-create-film.component.html',
  styleUrl: './form-create-film.component.css'
})
export class FormCreateFilmComponent {

  createFilmForm: FormGroup  = this.formBuilder.group({
      title: new FormControl(null, [Validators.required]),
      year: new FormControl(null, [Validators.required, Validators.email]),
      img: new FormControl(null, [Validators.required]),
      director: new FormControl(null, [Validators.required]),
      category: new FormControl(null, [Validators.required]),
      synopsis: new FormControl(null, [Validators.required]),
  })

  constructor(
    private formBuilder: FormBuilder,
    private filmService: FilmService,
  ){}

  createFilm(){
    const filmForCreate: FilmCreateData = {
      title: this.createFilmForm.get('title')?.value,
      year: this.createFilmForm.get('year')?.value,
      img: this.createFilmForm.get('img')?.value,
      director: this.createFilmForm.get('director')?.value,
      category: this.createFilmForm.get('category')?.value,
      synopsis: this.createFilmForm.get('synopsis')?.value,
    };
    this.filmService.insert(filmForCreate).subscribe({
      next: (res:any) => alert('¡Película creada con exito!'),
      error: (err) => console.log('error al crear la pelicula')
    })
  }
}
