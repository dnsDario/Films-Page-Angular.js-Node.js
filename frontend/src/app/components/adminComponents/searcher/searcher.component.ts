import { Component, Output } from '@angular/core';
import { FormGroup, FormsModule, ReactiveFormsModule, FormBuilder, FormControl, Validators } from '@angular/forms';
import { FilmService } from '../../../services/film.service';
import { EventEmitter } from 'stream';

@Component({
  selector: 'app-searcher',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './searcher.component.html',
  styleUrl: './searcher.component.css'
})
export class SearcherComponent {
  @Output() filtroOutput: EventEmitter<string> = new EventEmitter<string>();
  filtro?: string;
  searcherFilm: FormGroup = this.formBuilder.group({
    film: new FormControl(null, [Validators.required]),
  })

  constructor(
    private formBuilder: FormBuilder,
    private filmService: FilmService,
  ){}

  

  searchFilm(){
    this.filtro = this.searcherFilm.get('film')?.value,
    this.filtroOutput.emit(this.filtro),
  }



}
