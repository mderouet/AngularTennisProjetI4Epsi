/**
 * Created by Ugo on 30/03/2017.
 */
import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HomeComponent} from './pages/home/home.component';
import {JoueurComponent} from './pages/joueur/joueur.component';
import {RencontresComponent} from './pages/rencontres/rencontres.component';
import {ResultatComponent} from './pages/resultat/resultat.component';


export const router: Routes = [
    {path: '', redirectTo: 'home', pathMatch: 'full'},
    {path: 'home', component: HomeComponent},
    {path: 'joueurs', component: JoueurComponent},
    {path: 'rencontres', component: RencontresComponent},
    {path: 'resultat/:id', component: ResultatComponent},


];

export const routes: ModuleWithProviders = RouterModule.forRoot(router);
