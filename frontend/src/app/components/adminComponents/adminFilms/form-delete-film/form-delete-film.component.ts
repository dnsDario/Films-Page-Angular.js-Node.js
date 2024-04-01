import { Component } from '@angular/core';
import { FormGroup, FormsModule, ReactiveFormsModule, FormBuilder, FormControl, Validators } from '@angular/forms';
import { FilmService } from '../../../../services/film.service';

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
    private filmService: FilmService
  ){}
  
  deleteFilm(){
    const id: string = this.deleterFilm.get('id')?.value

    this.filmService.deleteOne(id).subscribe({
      next: (res: any) => {
        alert('La pelicula fue eliminada'+ res.title),
        console.log(res)
      },
      error: (err) => console.log(err),
    });
  }  
}
