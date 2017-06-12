//
import {Component, OnInit} from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import {RequestService} from '../../services/request.service';
declare var io;

@Component({
    selector: 'home',
    templateUrl: '/app/pages/resultat_details/resultat_details.html',
    styleUrls: ['./resultat_details.component.css'],
    providers: [RequestService]
})

export class ResultatDetails implements OnInit, SocketInterface {
    rencontres: Array<any> = [];
    scoreRencontre: [any];
    alerts: [any];
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
    io:any;


    constructor(public requestService: RequestService, private route: ActivatedRoute, private router: Router) {

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
        this.io=io( 'http://angular.warpz.tk', {'transports': ['websocket', 'polling']});
        this.io.on('connect', function () {
            console.log("connect");
        });
        this.io.on('updateScore' +
            '', function () {
            this.chargementRequetes();
        });
    };


    chargementRequetes(){
      this.chargerRencontres();
      this.chargerScore(this.idResultat);
      this.chargerAlerts(this.idResultat);
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
            console.log("charger score")
            console.log(scoreRencontre);
            this.scoreRencontre = scoreRencontre;
            console.log(this.scoreRencontre);
            this.chargerScoreInfo();
            this.calculScore();
            // this.reverseScore();
        });
    };

    chargerScoreInfo() {
        let self = this;
        var key;

        for(let currentRencontre of this.scoreRencontre){
            for(let currentSets of currentRencontre.rencontre.sets){
                for(let currentJeux of currentSets.jeux){
                    for (key in currentJeux.jeu.points) {
                        self.points.push(currentJeux.jeu.points[key].point);
                    }
                }
            }
        }
        this.idEquipe1 = this.scoreRencontre[0].rencontre.equipes[0].equipe.id;
        this.idEquipe2 = this.scoreRencontre[0].rencontre.equipes[1].equipe.id;
        this.typeMatch = this.scoreRencontre[0].rencontre.type;
    }

    reverseScore() {
        console.log("reverse");
        console.log(this.scoreRencontre[0])
            this.scoreRencontre[0].rencontre.sets.reverse();
        for(let currentSet of this.scoreRencontre[0].rencontre.sets){
            currentSet.jeux.reverse();
            for(let currentJeu of currentSet.jeux){
                //TODO reverse l'objet points (reverse marche pas sur les objects)
                //currentJeu.jeu.points.reverse();
            }
        }
        console.log(this.scoreRencontre)
    }


    calculScore() {
        console.log('début');
        for (let point of this.points) {
            // Ajout Score equipe 1
            if (point.valeur !== "null") {
                // if (point.valeur !== "Jeu") {
                if (point.equipe_id === this.idEquipe1) {
                    //Vérif : Est ce que Equipe 1 === 40 ?
                    if (this.tabValeurPointE1[this.valeurScoreE1] === "40") {
                        // console.log("Equipe 1 === 40")
                        //Véfification Equipe 2 === 40 A ?

                        if (this.tabValeurPointE2[this.valeurScoreE2] === "40A") {
                            // console.log("Equipe 2 === 40 A ?")
                            //Incrémentation du score de Equipe 1
                            this.valeurScoreE1 = this.valeurScoreE1 + 1;
                            this.valeurScoreE2 = this.valeurScoreE2 - 1;
                            console.log("Equipe :" + this.idEquipe1 + " - Score : " + this.tabValeurPointE1[this.valeurScoreE1])
                        } else {
                            // console.log("Vérification Equipe 1 est à 5 Jeu avec 2 jeu d'écarts")
                            // Vérification Equipe 1 est à 5 Jeu avec 2 jeu d'écarts
                            if (this.valeurJeuE1 === 5 && (this.valeurJeuE1 > this.valeurJeuE2 + 1)) {
                                // console.log("Vérif : Est ce un match type H ?")
                                // Vérif : Est ce un match type H ?
                                if (this.typeMatch === "H") {
                                    // console.log("Est ce que l'équipe 2 à déjà 2 SET ?")
                                    // Verif : Est ce que l'équipe 2 à déjà 2 SET ?
                                    if (this.valeurSetE2 === 2) {
                                        //Match Gagné par Equipe 1 Type H
                                        this.valeurSetE1 = this.valeurSetE1 + 1;
                                        console.log('Match gagné par : ' + this.idEquipe1)
                                    } else {
                                        // console.log("//Incrémentation Set Equipe 1 & Réinitialisation des Jeux")
                                        //Incrémentation Set Equipe 1 & Réinitialisation des Jeu
                                        this.iTab += 1;
                                        this.valeurJeuE1 = this.valeurJeuE1 + 1;
                                        this.valeurSetE1 = this.valeurSetE1 + 1;
                                        this.valeurJeuE1 = 0;
                                        this.valeurJeuE2 = 0;
                                        console.log("Set Gagné || Equipe :" + this.idEquipe1 + " - Score : " + this.tabValeurPointE1[this.valeurScoreE1] + " - Jeu : " + this.valeurJeuE1 + " - Set : " + this.valeurSetE1)
                                    }

                                } else {
                                    // Vérif : Est ce un match type : Femme
                                    if (this.valeurSetE1 === 1) {
                                        //Match Gagné par Equipe 1 Type F
                                        this.valeurSetE1 = this.valeurSetE1 + 1;
                                        console.log('Match gagné par : ' + this.idEquipe1)
                                    } else {
                                        //Incrémentation Set Equipe 1 & Réinitialisation des Jeux
                                        this.iTab += 1;
                                        this.valeurJeuE1 = this.valeurJeuE1 + 1;
                                        this.valeurSetE1 = this.valeurSetE1 + 1;
                                        this.valeurJeuE1 = 0;
                                        this.valeurJeuE2 = 0;
                                        console.log("Set Gagné || Equipe :" + this.idEquipe1 + " - Score : " + this.tabValeurPointE1[this.valeurScoreE1] + " - Jeu : " + this.valeurJeuE1 + " - Set : " + this.valeurSetE1)
                                    }
                                }
                            }
                            else {
                                //Incrémentation Jeu de l'Equipe 1 & Réinitialisation des scores
                                this.valeurJeuE1 = this.valeurJeuE1 + 1;
                                this.affichageJeuE1[this.iTab] = this.valeurJeuE1;
                                this.valeurScoreE1 = 0;
                                this.valeurScoreE2 = 0;
                                console.log("Jeu Gagné || Equipe :" + this.idEquipe1 + " - Score : " + this.tabValeurPointE1[this.valeurScoreE1] + " - Jeu : " + this.valeurJeuE1 + " - Set : " + this.valeurSetE1)
                            }
                        }
                    } else {
                        this.valeurScoreE1 += 1;
                        console.log("Equipe :" + this.idEquipe1 + " - Score : " + this.tabValeurPointE1[this.valeurScoreE1])
                    }
                }
                if (point.equipe_id === this.idEquipe2) {
                    //Vérification Equipe 1 === 40 ?
                    if (this.tabValeurPointE2[this.valeurScoreE2] === "40") {
                        //Véfification Equipe 2 === 40 A ?
                        if (this.tabValeurPointE1[this.valeurScoreE1] === "40A") {
                            //Incrémentation du score de Equipe 1
                            this.valeurScoreE2 = this.valeurScoreE2 + 1;
                            this.valeurScoreE1 = this.valeurScoreE1 - 1;
                            console.log("Equipe :" + this.idEquipe2 + " - Score : " + this.tabValeurPointE2[this.valeurScoreE2])
                        }
                        // Equipe 2 n'est pas à 40A
                        else {
                            // Vérification Equipe 1 est à 5 Jeu avec 2 jeu d'écarts
                            if (this.valeurJeuE2 === 5 && (this.valeurJeuE2 > this.valeurJeuE1 + 1)) {
                                if (this.typeMatch === "H") {
                                    // Verif Match type : Homme
                                    if (this.valeurSetE1 === 2) {
                                        //Match Gagné par Equipe 1 Type H
                                        this.valeurSetE2 = this.valeurSetE2 + 1;
                                        console.log('Match gagné par : ' + this.idEquipe2)
                                    } else {
                                        //Incrémentation Set Equipe 1 & Réinitialisation des Jeu
                                        this.iTab2 += 1;
                                        this.valeurJeuE2 = this.valeurJeuE2 + 1;
                                        this.valeurSetE2 = this.valeurSetE2 + 1;
                                        this.valeurJeuE2 = 0;
                                        this.valeurJeuE1 = 0;
                                        console.log("Set Gagné || Equipe :" + this.idEquipe2 + " - Score : " + this.tabValeurPointE2[this.valeurScoreE2] + " - Jeu : " + this.valeurJeuE2 + " - Set : " + this.valeurSetE2)
                                    }

                                } else {
                                    // Match type : Femme
                                    if (this.valeurSetE2 === 1) {
                                        //Match Gagné par Equipe 1 Type F
                                        this.valeurSetE2 = this.valeurSetE2 + 1;
                                        console.log('Match gagné par : ' + this.idEquipe2)
                                    } else {
                                        //Incrémentation Set Equipe 1 & Réinitialisation des Jeu
                                        this.iTab2 += 1;
                                        this.valeurJeuE2 = this.valeurJeuE2 + 1;
                                        this.valeurSetE2 = this.valeurSetE2 + 1;
                                        this.valeurJeuE2 = 0;
                                        this.valeurJeuE1 = 0;
                                        console.log("Set Gagné || Equipe :" + this.idEquipe2 + " - Score : " + this.tabValeurPointE2[this.valeurScoreE2] + " - Jeu : " + this.valeurJeuE2 + " - Set : " + this.valeurSetE2)
                                    }
                                }
                            }
                            else {
                                //Incrémentation Jeu de l'Equipe 1 & Réinitialisation des scores
                                this.valeurJeuE2 = this.valeurJeuE2 + 1;
                                this.valeurScoreE2 = 0;
                                this.valeurScoreE1 = 0;
                                this.affichageJeuE2[this.iTab2] = this.valeurJeuE2;
                                console.log("Jeu Gagné || Equipe :" + this.idEquipe2 + " - Score : " + this.tabValeurPointE2[this.valeurScoreE2] + " - Jeu : " + this.valeurJeuE2 + " - Set : " + this.valeurSetE2)
                            }
                        }
                    } else {
                        this.valeurScoreE2 += 1;
                        console.log("Equipe :" + this.idEquipe2 + " - Score : " + this.tabValeurPointE2[this.valeurScoreE2])
                    }
                }
            }
        }

        console.log(this.affichageJeuE1);
        console.log(this.affichageJeuE2);
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
        Object.keys(this.alerts).map(function (objectKey, index) {
            var value = self.alerts[objectKey];
            self.tabAlert.push(value);
        })
    }
}


