/**
 * Created by warp on 25/04/2017.
 */

import {Component, OnInit} from '@angular/core';
import {RequestService} from "../../services/request.service";
import {Config} from "../../config/config";
import {Joueur} from "../../services/joueur.service";

@Component({
  selector: 'joueur',
  templateUrl: '/app/pages/joueur/joueur.html',
  providers: [RequestService, Config, Joueur]
})
export class JoueurComponent implements OnInit {
  joueurs: [any];
  joueur: any;

  valueConfig: String;
  constructor(public requestService: RequestService) {
  }
  ngOnInit() {
    this.requestService.listJoueur().subscribe((joueurs) => {
      this.joueurs = joueurs;
    });

    this.requestService.showJoueur(1).subscribe((joueur) => {
      this.joueur = joueur;
    });
  }
}
