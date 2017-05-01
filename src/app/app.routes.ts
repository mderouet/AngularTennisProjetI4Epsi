/**
 * Created by Ugo on 30/03/2017.
 */
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';

import {JoueurComponent} from './pages/joueur/joueur.component';

export const router: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'joueur', component: JoueurComponent }
];

export const routes: ModuleWithProviders = RouterModule.forRoot(router);
