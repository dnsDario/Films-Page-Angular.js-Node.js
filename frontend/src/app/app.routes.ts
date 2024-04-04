import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { FilmsComponent } from './pages/films/films.component';
import { RegisterComponent } from './pages/register/register.component';
import { LoginComponent } from './pages/login/login.component';
import { AdminUsersComponent } from './pages/admin-users/admin-users.component';
import { AdminFilmsComponent } from './pages/admin-films/admin-films.component';

import { AuthGuard } from './guards/auth.guard';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { FilmComponent } from './pages/films/film/film.component';
import { AdminGuard } from './guards/admin.guard';

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
        canActivate: [AuthGuard],
        path: "films",
        component: FilmsComponent,        
        children: [{      
            canActivate: [AuthGuard],      
            component: FilmComponent,
            path: ":id",
        }]
    },
    {
        canActivate: [AdminGuard],
        path: "adminUsers",
        component: AdminUsersComponent,
        
    },
    {
        canActivate: [AdminGuard],
        path: "adminFilms",
        component: AdminFilmsComponent,
        
    },
    {
        path: "**",
        component: NotFoundComponent,
        redirectTo: ""
    }
];
