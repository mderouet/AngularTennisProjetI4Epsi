/**
 * Created by warp on 25/04/2017.
 */

import { Component } from '@angular/core';
import {Joueur} from '../../services/joueur';
import{ Http , Headers } from '@angular/http';

@Component({
  selector: 'joueur',
  templateUrl: '/app/pages/vueJoueur/vueJoueur.html',
})
export class VueJoueur  {
  name = 'Angular';
  joueur = new Joueur(1 , 1 , 'Nom', 'Prenom' , new Date() , 'URL_IMAGE');
  constructor(public http: Http , private headers: Headers) {

}



}
