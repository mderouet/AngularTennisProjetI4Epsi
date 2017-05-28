//
import {Component, OnInit} from '@angular/core';
import {Router, ActivatedRoute, Params} from '@angular/router';
import {RequestService} from '../../services/request.service';
import {Config} from "../../config/config";
import {UtilsService} from "../../services/utils.service";
import {CacheService} from "../../services/cache.service";

@Component({
    selector: 'home',
    templateUrl: '/app/pages/resultat/resultat.html',
    styleUrls: ['./resultat.component.css'],
    providers: [RequestService, Config, UtilsService]
})

export class ResultatComponent implements OnInit, CacheInterface {
    rencontres: [JSON];
    tournois: [JSON];
    private sub: any;
    idResultat: number;

    constructor(public requestService: RequestService, private route: ActivatedRoute, private router: Router,
                private utilsService: UtilsService,private cacheService: CacheService) {

    }

    ngOnInit() {

      this.initCache();
      if(this.utilsService.isEmptyObject(this.cacheService.rencontres)){
        console.log("chargement rencontres RESULTAT PAGE")
        this.chargerRencontres();
      }
      if(this.utilsService.isEmptyObject(this.cacheService.tournois)){
        console.log("chargement tournois RESULTAT PAGE")
        this.chargerTournois();
      }

        this.sub = this.route.params.subscribe(params => {
            this.idResultat = +params['id']; // (+) converts string 'id' to a number
        });
    }

  initCache(){
    if(!this.utilsService.isEmptyObject(this.cacheService.rencontres)){
      this.rencontres = this.cacheService.rencontres;
    }
    if(!this.utilsService.isEmptyObject(this.cacheService.tournois)){
      this.tournois = this.cacheService.tournois;
    }
  }

  clearCache(){
    this.cacheService.rencontres = null;
    this.cacheService.tournois = null;
  }


    chargerRencontres() {
        this.requestService.listRencontres().subscribe((rencontres) => {
          // Local value
          this.rencontres = rencontres;
          // Cache
          this.cacheService.rencontres = rencontres;
        });
    }

    chargerTournois() {
        this.requestService.listTournois().subscribe((tournois) => {
          // Local value
          this.tournois = tournois;
          // Cache
          this.cacheService.tournois = tournois;
        });
    }

    getImgTournoi(id) {
        for (let tournoi of this.tournois) {
            if (tournoi["tournoi"].id_tournoi === id) {
                return tournoi["tournoi"].url_image
            }
        }
    }

    getAllRencontresFinished() {
        for (let rencontre of this.rencontres) {
            if (rencontre["rencontre"].date_debut != null) {
                return rencontre["rencontre"].id_rencontre
            }
        }
    }
}


