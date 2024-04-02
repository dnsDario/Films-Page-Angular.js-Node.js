
import { Component, OnInit } from '@angular/core';
import { Film } from '../../interfaces/film';
import { FilmService } from '../../services/film.service';
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-films',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './films.component.html',
  styleUrl: './films.component.css'
})
export class FilmsComponent implements OnInit{
  films: Film[] = []
  constructor(private filmService: FilmService){}
  ngOnInit(): void {
    this.filmService.findAll().subscribe({
      next:(res) => this.films = res as Film[],
      error:(err) => console.log(err)
    })
  }
}
