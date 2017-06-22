//
import {Component, OnInit} from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import {RequestService} from '../../services/request.service';
import {UtilsService} from "../../services/utils.service";

declare var io;

@Component({
    selector: 'home',
    templateUrl: '/app/pages/resultat_details/resultat_details.html',
    styleUrls: ['./resultat_details.component.css'],
    providers: [RequestService]
})

export class ResultatDetails implements OnInit, SocketInterface {
    rencontres: Array<any> = [];
    rencontreDetail: Array<any> = [];
    scoreRencontre: [any];
    alerts: [any];
    private sub: any;
    idResultat: number;
    points: Array<any> = [];
    tabAlert: Array<any> = [];
    idEquipe1 = 0;
    idEquipe2 = 0;
    typeMatch = "";
    io:any;


    constructor(public requestService: RequestService, private route: ActivatedRoute, private router: Router,private utilsService: UtilsService) {

    }

    ngOnInit() {


      let self = this;
        this.sub = this.route.params.subscribe(params => {
            this.idResultat = +params['id']; // (+) converts string 'id' to a number
            self.chargementRequetes();
        });

        this.initSocket();
    }

    initSocket(){
        let self= this;
        this.io=io( 'http://projet-tennis.ddns.net', {'transports': ['websocket', 'polling']});
        this.io.on('connect', function () {
          self.utilsService.log("[SOCKETIO] Connection /resultat_details/{id}")

        });
        this.io.on('updateScore' +
            '', function () {
          self.utilsService.log("[SOCKETIO] Rechargement score /resultat_details/{id}")
          self.chargementRequetes();
        });
    };


    chargementRequetes(){
      this.chargerRencontres();
      this.chargerScore(this.idResultat);
      this.chargerAlerts(this.idResultat);
      this.chargerResume(this.idResultat);
    }

  chargerResume(idRencontre){
      this.requestService.resumeRencontre(idRencontre).subscribe(
        resumeRencontreDetail => {
          this.rencontreDetail.push(resumeRencontreDetail);
        });
  }

  getScoreByRencontre(idRencontre){
    for (var obj of this.rencontreDetail) {
      for (var resume of obj.rencontre) {
        if(resume.id === idRencontre)
        {
          return resume.score;
        }
      }
    }
  }

    chargerRencontres() {
        this.requestService.listRencontres().subscribe((rencontres) => {
            // Local value
            console.log("charger rencontres");
            for (let r of rencontres) {
                this.rencontres[r.rencontre.id_rencontre] = r;
            }
        });
    }

    chargerScore(id: number) {
        this.requestService.showScore(id).subscribe((scoreRencontre) => {
            // Local value
          this.utilsService.log("[CHARGEMENT] score /resultat_details/{id}");

            this.scoreRencontre = scoreRencontre;
            this.formatScoreInfo();
        });
    };

    formatScoreInfo() {
        let self = this;
        var key;
        self.points=[];

        for(let currentRencontre of this.scoreRencontre){
            for(let currentSets of currentRencontre.rencontre.sets){
                for(let currentJeux of currentSets.jeux){
                    for (key in currentJeux.jeu.points) {
                        self.points.push(currentJeux.jeu.points[key].point);
                    }
                }
            }
        }
        self.points= self.points.reverse();
        this.idEquipe1 = this.scoreRencontre[0].rencontre.equipes[0].equipe.id;
        this.idEquipe2 = this.scoreRencontre[0].rencontre.equipes[1].equipe.id;
        this.typeMatch = this.scoreRencontre[0].rencontre.type;
    }


    chargerAlerts(id: number) {
        this.requestService.showAlert(id).subscribe((alerts) => {
            // Local value
            this.alerts = alerts;
            this.chargerAlertInfo();
        });
    }

    chargerAlertInfo() {
        let self = this;
        self.tabAlert=[];
        Object.keys(this.alerts).map(function (objectKey, index) {
            var value = self.alerts[objectKey];
            self.tabAlert.push(value);
        });
        self.tabAlert=self.tabAlert.reverse();
    }
}


