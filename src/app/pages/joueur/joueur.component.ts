/**
 * Created by warp on 25/04/2017.
 */

import {Component, OnInit} from '@angular/core';
import {Joueur} from '../../services/joueur.service';

@Component({
  selector: 'joueur',
  templateUrl: '/app/pages/joueur/joueur.html'
})
export class JoueurComponent implements OnInit {
  joueur: Joueur;
  valueConfig: String;
  constructor() {
  }
  ngOnInit() {
    this.joueur = new Joueur(1 , 1 , 'Derouet', 'martin' , new Date() , 'URL_IMAGE');
  }
}
