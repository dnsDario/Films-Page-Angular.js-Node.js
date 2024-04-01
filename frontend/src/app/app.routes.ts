import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { FilmsComponent } from './pages/films/films.component';
import { RegisterComponent } from './pages/register/register.component';
import { LoginComponent } from './pages/login/login.component';
import { AdminUsersComponent } from './pages/admin-users/admin-users.component';
import { AdminFilmsComponent } from './pages/admin-films/admin-films.component';

import { authGuard } from './guards/auth.guard';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { FilmComponent } from './pages/films/film/film.component';

export const routes: Routes = [
    {
        path: "" ,
        component: HomeComponent
        
    },
    {
        path: "login",
        component: LoginComponent,
    },
    {
        path: "register",
        component: RegisterComponent
    },
    {
        path: "films",
        component: FilmsComponent,
        /* canActivate: [authGuard], */
        children: [{            
            component: FilmComponent,
            path: ":id",
        }]
    },
    {
        path: "adminUsers",
        component: AdminUsersComponent,
        canActivate: [authGuard],
    },
    {
        path: "adminFilms",
        component: AdminFilmsComponent,
        canActivate: [authGuard],
    },
    {
        path: "**",
        component: NotFoundComponent,
        redirectTo: ""
    }
];
