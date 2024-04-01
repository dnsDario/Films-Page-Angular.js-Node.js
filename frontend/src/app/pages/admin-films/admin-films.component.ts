import { Component } from '@angular/core';
import { TableFilmsComponent } from '../../components/adminComponents/adminFilms/table-films/table-films.component';
import { SearcherComponent } from '../../components/adminComponents/searcher/searcher.component';
import { FormCreateFilmComponent } from '../../components/adminComponents/adminFilms/form-create-film/form-create-film.component';
import { FormDeleteFilmComponent } from '../../components/adminComponents/adminFilms/form-delete-film/form-delete-film.component';

@Component({
  selector: 'app-admin-films',
  standalone: true,
  imports: [TableFilmsComponent, SearcherComponent, FormCreateFilmComponent, FormDeleteFilmComponent],
  templateUrl: './admin-films.component.html',
  styleUrl: './admin-films.component.css'
})
export class AdminFilmsComponent {

}
