import { Film } from './../../../../interfaces/film';
import { Component, Input } from '@angular/core';
import { FilmService } from '../../../../services/film.service';
import { SearcherComponent } from '../../searcher/searcher.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-table-films',
  standalone: true,
  imports: [CommonModule, SearcherComponent, SearcherComponent],
  templateUrl: './table-films.component.html',
  styleUrl: './table-films.component.css'
})
export class TableFilmsComponent {
  films: Film[] = []
  filmsFiltered: Film[] = []

  constructor(private filmService: FilmService){}
  ngOnInit(): void {
    this.filmService.findAll().subscribe({
      next:(res) => this.films = res as Film[],
      error:(err) => console.log(err)
    })
  }


  filtrado(texto:string){
    this.filmsFiltered = this.films.filter((i)=> i.title.toLowerCase().includes(texto))
  }
  handleFiltroChange(filtro: string) {
    this.filtrado(filtro);
  }
}
