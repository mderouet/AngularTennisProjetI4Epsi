//
import {Component, OnInit, Pipe, PipeTransform} from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import {RequestService} from '../../services/request.service';
import {Config} from "../../config/config";
import {CacheService} from "../../services/cache.service";
import {UtilsService} from "../../services/utils.service";


declare var io;

@Component({
    selector: 'home',
    templateUrl: '/app/pages/resultat/resultat.html',
    styleUrls: ['./resultat.component.css'],
    providers: [RequestService, Config]
})

export class ResultatComponent implements OnInit, CacheInterface, SocketInterface {
    io: any;
    idArrayRencontre: any = [];
    rencontres: [any];
    resumeRencontre: Array<any> = [];
    tournois: [JSON];
      private sub: any;
      idResultat: number;
      points: Array<any> = [];
      tabAlert: Array<any> = [];

    constructor(public requestService: RequestService, private route: ActivatedRoute, private router: Router,
                private utilsService: UtilsService,private cacheService: CacheService) {

    }

    ngOnInit() {
      this.initCache();
      // Chargement des rencontres dans le cas ou elle ne le serait pas déja
      if(this.utilsService.isEmptyObject(this.cacheService.rencontres)){

        this.chargerRencontres();
      }
      else{
        this.idArrayRencontre = [];
          for(let element of this.cacheService.rencontres){
              this.idArrayRencontre.push(element.rencontre.id_rencontre);
          }
          // Les scores sont dans tous les cas rechargés
          this.chargerResume(this.idArrayRencontre);
      }
      if(this.utilsService.isEmptyObject(this.cacheService.tournois)){
        this.utilsService.log("[CHARGEMENT] tournois /resultat");

        this.chargerTournois();
      }

        this.sub = this.route.params.subscribe(params => {
            this.idResultat = +params['id']; // (+) converts string 'id' to a number
        });

        this.initSocket();
    }

    initSocket(){
        this.io=io( 'http://projet-tennis.ddns.net', {'transports': ['websocket', 'polling']});
        this.io.on('connect', function () {
          self.utilsService.log("[SOCKETIO] Connection /resultat");
        });

        var self=this;
        this.io.on('updateScore', function () {
          self.utilsService.log("[SOCKETIO] Rechargement score /resultat")

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
      this.utilsService.log("[CHARGEMENT] rencontres /resultat");

      this.requestService.listRencontres().subscribe((rencontres) => {
          // Local value
          this.rencontres = rencontres;

          // Cache
          this.cacheService.rencontres = rencontres;
            this.idArrayRencontre = [];
            for(let element of this.rencontres){
                this.idArrayRencontre.push(element.rencontre.id_rencontre);
            }

          this.chargerResume(this.idArrayRencontre);
        });
    }

    chargerResume(idRencontres){
      this.utilsService.log("[CHARGEMENT] resultats /resultat");

      var temporaryResume = [];

      for(let i = 0; i < idRencontres.length; i++)
      {
        this.requestService.resumeRencontre(idRencontres[i]).subscribe(
          resumeCurrentRencontre => {
            temporaryResume.push(resumeCurrentRencontre);
            if(temporaryResume.length === idRencontres.length - 1)
            {
              this.resumeRencontre = temporaryResume;
              this.getScoreByRencontre(5);
            }
          });
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
        for (var resume of obj.rencontre) {
         if(resume.id === idRencontre)
         {
           return resume.score;
         }
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




