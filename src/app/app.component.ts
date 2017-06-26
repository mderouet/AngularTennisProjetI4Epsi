import {Component, OnInit} from '@angular/core';
import {CacheService} from "./services/cache.service";
import {ActivatedRoute, Router} from "@angular/router";
import {RequestService} from "./services/request.service";
import {Config} from "./config/config";


@Component({
    selector: 'my-app',
  providers: [RequestService, CacheService, Config],

  template: '<header>' +
    '<div class="menuTop">' +
    '<div class="row">' +
    '<div id="imgLogoHeader" class="large-3 medium-2 small-6 columns">' +
    '<a routerLink="/home"><img src="assets/img/logo2.png"></a>' +
    '</div>' +
    '<div class="large-9 medium-10 small-6 columns">' +
    '<ul class="menu">' +
    '<li><a routerLink="/home">Accueil</a></li>' +
    '<li><a routerLink="/joueurs">Liste Joueurs</a></li>' +
    '<li><a routerLink="/resultat">Résultats</a></li>' +
    '<li><a routerLink="/articles">Articles</a></li>' +
    '<li><a routerLink="/home" fragment="actualite">Actualité</a></li>' +
    '<li><a routerLink="/home#contact">Contact</a></li>' +
    '</ul> ' +
    '</div> ' +
    '</div>' +
    '</div>' +
    '<section class="slickMatchAVenir">' +
    '<div class="container-full section1">' +
    '<div class="container">' +
    '<div class="matchAVenir">' +
    '<div class="matchs">' +
    '<h2>Match à venir</h2>' +
    '<div *ngIf="matchAvenir">' +
    '<h2>{{matchAvenir[0].rencontre.equipes[0].libelle}} <span style="font-size: 3em">/' +
    '</span> {{matchAvenir[0].rencontre.equipes[1].libelle}}</h2>' +
    '<h3>Tournois {{matchAvenir[0].rencontre.tournoi.libelle}} <br/>{{matchAvenir[0].rencontre.date_debut_formatted}}</h3> ' +
    '</div>' +
    '<span>' +
    '<a href="#">Decouvrir</a>' +
    '</span> ' +
    '<div> ' +
    '</div> ' +
    '</div> ' +
    '</div> ' +
    '</div> ' +
    '</div> ' +
    '</section>' +
    '</header>' +
    '<router-outlet></router-outlet>' +
    '<footer><div id="copyright">Copyright© 2017 - Make Tennis Great Again</div> <div id="mentionLegale">' +
    ' <a href="#">Mention Légale</a></div>' +
    '<script type="text/javascript" src="assets/js/jquery-3.1.1.min.js"></script>' +
    '<script type="text/javascript" src="assets/slickjs/js/slick.min.js"></script>' +
    '<script type="text/javascript" src="assets/foundation/js/foundation.min.js"></script>' +
    '<script type="text/javascript" src="assets/js/javascript.js"></script>' +
    '</footer>',
})
export class AppComponent implements OnInit {

  matchAvenir: [JSON];

  constructor(public requestService: RequestService, private route: ActivatedRoute,
              private router: Router,                private cacheService: CacheService) {

  }

  ngOnInit() {

    this.requestService.prochaineRencontreTournoi().subscribe((rencontre)=>{
      this.matchAvenir = rencontre;
    })

  }


}
