import {NgModule}      from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {RouterModule}   from '@angular/router';
import {AppComponent}  from './app.component';
import {HomeComponent} from './pages/home/home.component';
import {JoueurComponent} from './pages/joueur/joueur.component';
import {RencontresComponent} from './pages/rencontres/rencontres.component';
import {ResultatComponent} from './pages/resultat/resultat.component';
import {APP_BASE_HREF} from '@angular/common';
import {router} from './app.routes';
import {HttpModule} from "@angular/http";
import {ArticleComponent} from "./pages/article/article.component";
import {CacheService} from "./services/cache.service";
import {ResultatDetails} from "./pages/resultat_details/resultat_details.component";
import {ArticlesComponent} from "./pages/articles/articles.component";

@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot(router),
    HttpModule,
  ],

  declarations: [
    AppComponent,
    HomeComponent,
    JoueurComponent,
    RencontresComponent,
    ResultatDetails,
    ResultatComponent,
    ArticleComponent,
    ArticlesComponent,
  ],
  providers: [{provide: APP_BASE_HREF, useValue: '/'},CacheService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
