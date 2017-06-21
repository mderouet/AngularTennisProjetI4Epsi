//
import {Component, OnInit} from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import {RequestService} from '../../services/request.service';
import {Config} from "../../config/config";
import {UtilsService} from "../../services/utils.service";
import {CacheService} from "../../services/cache.service";
declare var io;

@Component({
    selector: 'home',
    templateUrl: '/app/pages/resultat/resultat.html',
    styleUrls: ['./resultat.component.css'],
    providers: [RequestService, Config, UtilsService]
})

export class ResultatComponent implements OnInit, CacheInterface, SocketInterface {
    io: any;
    idArrayRencontre: any = [];
    rencontres: [any];
    scoreRencontre: Array<JSON> = [];
    resumeRencontre: Array<any> = [];
    tournois: [JSON];
      private sub: any;
      idResultat: number;
      points: Array<any> = [];
      nbrPoints = 0;
      tabAlert: Array<any> = [];
      tabValeurPointE1 = ["0", "15", "30", "40", "40A"];
      tabValeurPointE2 = ["0", "15", "30", "40", "40A"];
      valeurScoreE1 = 0;
      valeurScoreE2 = 0;
      valeurJeuE1 = 0;
      valeurJeuE2 = 0;
      valeurSetE1 = 0;
      valeurSetE2 = 0;
      idEquipe1 = 0;
      idEquipe2 = 0;
      typeMatch = "";
      affichageJeuE1 = [0, 0, 0, 0, 0];
      affichageJeuE2 = [0, 0, 0, 0, 0];
      iTab = 0;
      iTab2 = 0;
    constructor(public requestService: RequestService, private route: ActivatedRoute, private router: Router,
                private utilsService: UtilsService,private cacheService: CacheService) {

    }

    ngOnInit() {
      this.initCache();
      if(this.utilsService.isEmptyObject(this.cacheService.rencontres)){
        console.log("chargement rencontres RESULTAT PAGE")

        this.chargerRencontres();
      }
      else{
          for(let element of this.cacheService.rencontres){
              this.idArrayRencontre.push(element.rencontre.id_rencontre);
          }

          this.chargerScores(this.idArrayRencontre);
      }
      if(this.utilsService.isEmptyObject(this.cacheService.tournois)){
        console.log("chargement tournois RESULTAT PAGE")
        this.chargerTournois();
      }

        this.sub = this.route.params.subscribe(params => {
            this.idResultat = +params['id']; // (+) converts string 'id' to a number
        });


        this.initSocket();


    }

    initSocket(){
        this.io=io( 'http://angular.warpz.tk', {'transports': ['websocket', 'polling']});
        this.io.on('connect', function () {
            console.log("connect");
        });
        var self=this;
        this.io.on('updateScore', function () {
            console.log('charge');
            self.chargerRencontres();
        });
    };

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

            for(let element of this.rencontres){
                this.idArrayRencontre.push(element.rencontre.id_rencontre);
            }
            this.chargerResume(this.idArrayRencontre);
            this.chargerScores(this.idArrayRencontre);

        });
    }

    chargerResume(idRencontres){
     var temporaryResume = [];

      for(let i = 0; i < idRencontres.length; i++)
      {
        this.requestService.resumeRencontre(idRencontres[i]).subscribe(
          resumeCurrentRencontre => {
            temporaryResume.push(resumeCurrentRencontre);
            if(temporaryResume.length === idRencontres.length - 1)
            {
              this.resumeRencontre = temporaryResume;
            }
          });
      }
    }

    chargerScores(idRencontres){
      var count = 0;
      for(let i = 0; i < idRencontres.length; i++)
      {
        this.requestService.showScore(idRencontres[i]).subscribe(
          score => {
            count ++;
            this.scoreRencontre.push(score);
            if(count === idRencontres.length){
              this.scoreRencontre.sort(this.sortFunction);
            }
          }
        );
      }
    }

sortFunction(a, b) {
  if (a[0].rencontre.id === b[0].rencontre.id) {
    return 0;
  }
  else {
    return (a[0].rencontre.id < b[0].rencontre.id) ? -1 : 1;
  }
}

    chargerTournois() {
        this.requestService.listTournois().subscribe((tournois) => {
          // Local value
          this.tournois = tournois;
          // Cache
          this.cacheService.tournois = tournois;
        });
    }

    getImgTournoi(idTournoi) {
        for (let tournoi of this.tournois) {
            if (tournoi["tournoi"].id_tournoi === idTournoi) {
                return tournoi["tournoi"].url_image
            }
        }
    }

    getScoreByRencontre(idRencontre){
      for (var obj of this.resumeRencontre) {
        for (var resume of obj) {
          console.log(resume.score);
          return(resume.score);
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


