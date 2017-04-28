import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule  }   from '@angular/router';
import { AppComponent }  from './app.component';
import { Home} from './pages/home/home';
import {VueJoueur} from './pages/vueJoueur/vueJoueur';

import {APP_BASE_HREF} from '@angular/common';
import { router  } from './app.routes';

@NgModule({
  imports:      [
    BrowserModule,
    RouterModule.forRoot(router)
  ],
  declarations: [ AppComponent, Home , VueJoueur],
  providers: [{provide: APP_BASE_HREF, useValue : '/' }],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
