import { Film } from './../../../../interfaces/film';
import { Component, OnInit} from '@angular/core';
import { FilmService } from '../../../../services/film.service';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-table-films',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './table-films.component.html',
  styleUrl: './table-films.component.css'
})
export class TableFilmsComponent implements OnInit{
  films: Film[] = []
  filmsFiltered: Film[] = []

  searcherFilm: FormGroup = this.formBuilder.group({
    film: new FormControl(null, [Validators.required]),
  });

  constructor(
    private filmService: FilmService,
    private formBuilder: FormBuilder
    ){}

  ngOnInit(): void {
    this.filmService.findAll().subscribe({
      next:(res) =>{
        this.films = res as Film[],
        console.log('aqui films',this.films)
      },
      error:(err) => console.log('error al cargar las peliculas'+ err)
    })
  }

  searchFilm(){
    const nombreFiltro = this.searcherFilm.get('film')?.value;
    console.log('nombreFiltro', nombreFiltro)
    this.filmsFiltered = this.films.filter((i)=> i.title.toLowerCase().includes(nombreFiltro))
    console.log('este es el filtrado de peliculas',this.filmsFiltered)
  }
}
