import {Component, OnInit} from '@angular/core';
import {RequestService} from "../../services/request.service";
import {Config} from "../../config/config";
import {Joueur} from "../../services/joueur.service";

@Component({
    selector: 'joueur',
    templateUrl: '/app/pages/joueur/joueur.html',
    providers: [RequestService, Config, Joueur],
    styleUrls:  ['./joueur.component.css']
})
export class JoueurComponent implements OnInit {
    joueurs: [JSON];
    joueur: string;
    valueConfig: String;

    constructor(public requestService: RequestService) {

    }

    ngOnInit() {
        this.chargerJoueurs();
    }

  //Charge la liste des joueurs et les données qui sont liés
  chargerJoueurs() {
    this.requestService.listJoueur().subscribe((joueurs) => {
      this.joueurs = joueurs;
      for(var j in joueurs) {
        console.log(joueurs[j]);
      }
    });
  }
}
