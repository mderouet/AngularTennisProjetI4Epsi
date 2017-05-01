import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule  }   from '@angular/router';
import { AppComponent }  from './app.component';
import {HomeComponent} from './pages/home/home.component';
import {JoueurComponent} from './pages/joueur/joueur.component';
import {APP_BASE_HREF} from '@angular/common';
import { router  } from './app.routes';
import {HttpModule} from "@angular/http";

@NgModule({
  imports:      [
    BrowserModule,
    RouterModule.forRoot(router),
    HttpModule
  ],

  declarations: [ AppComponent, HomeComponent , JoueurComponent],
  providers: [{provide: APP_BASE_HREF, useValue : '/' }],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
