import { ActivatedRoute, RouterModule } from '@angular/router';
import { Component } from '@angular/core';
import { Film } from '../../../interfaces/film';
import { FilmService } from '../../../services/film.service';

@Component({
  selector: 'app-film',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './film.component.html',
  styleUrl: './film.component.css',
})
export class FilmComponent {
  filmId: string = '';
  film: Film = {_id:"", title: "", year: 0, img: "", category: "",  director: "", synopsis:"" } 

  constructor(private activatedRoute: ActivatedRoute, private filmService: FilmService) {
    this.activatedRoute.params.subscribe({
      next:(res: any)=> {
        this.filmId = res.id,
        this.filmService.findById(this.filmId).subscribe({
          next: (res) => this.film = res as Film,
          error: (err) => console.log(err)
        })
      },
      error:(err) => console.log(err)
    })
    
  }
  
}
