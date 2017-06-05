/**
 * Created by Ugo on 30/03/2017.
 */
import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HomeComponent} from './pages/home/home.component';
import {JoueurComponent} from './pages/joueur/joueur.component';
import {RencontresComponent} from './pages/rencontres/rencontres.component';
import {ResultatComponent} from './pages/resultat/resultat.component';
import {ArticleComponent} from "./pages/article/article.component";
import {ResultatDetails} from "./pages/resultat_details/resultat_details.component";
import {ArticlesComponent} from "./pages/articles/articles.component";


export const router: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'joueurs', component: JoueurComponent},
  {path: 'rencontres', component: RencontresComponent},
  {path: 'resultat_details/:id', component: ResultatDetails},
  {path: 'resultat', component: ResultatComponent},
  {path: 'article/:id', component: ArticleComponent},
  {path: 'articles', component: ArticlesComponent},

];

export const routes: ModuleWithProviders = RouterModule.forRoot(router);
