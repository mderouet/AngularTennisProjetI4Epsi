/**
 * Created by warp on 25/04/2017.
 */

import { Component } from '@angular/core';
import {Joueur} from '../../services/joueur';

@Component({
  selector: 'joueur',
  templateUrl: '/app/pages/vueJoueur/vueJoueur.html',
})
export class VueJoueur  {
  joueur = new Joueur(1 , 1 , 'Derouet', 'martin' , new Date() , 'URL_IMAGE');

}
