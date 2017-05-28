import {Component, OnInit} from '@angular/core';
import {RequestService} from "../../services/request.service";
import {Config} from "../../config/config";
import {Joueur} from "../../services/joueur.service";
import {UtilsService} from "../../services/utils.service";
import {CacheService} from "../../services/cache.service";

@Component({
  selector: 'joueurs',
  templateUrl: '/app/pages/joueur/joueur.html',
  providers: [RequestService, Config, Joueur, UtilsService],
  styleUrls:  ['./joueur.component.css']
})
export class JoueurComponent implements OnInit, CacheInterface {

  joueurs: [JSON];
  joueur: string;

  constructor(private requestService: RequestService, private utilsService: UtilsService, private cacheService: CacheService) {

  }

  ngOnInit() {
    this.initCache();

    if(this.utilsService.isEmptyObject(this.cacheService.joueurs)){
      console.log("chargement joueurs JOUEURS PAGE")
      this.chargerJoueurs();
    }
  }

  initCache() {
    if(!this.utilsService.isEmptyObject(this.cacheService.joueurs)){
      this.joueurs = this.cacheService.joueurs;
    }
  }

  clearCache() {
    this.cacheService.joueurs = null;
  }

  // Charge la liste des joueurs et les données qui sont liés
  chargerJoueurs() {
    this.requestService.listJoueur().subscribe((joueurs) => {
      // Local value
      this.joueurs = joueurs;
      // Cache
      this.cacheService.joueurs = joueurs;
    });
  }
}
