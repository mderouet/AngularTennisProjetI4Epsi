//
import {Component, OnInit} from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import {RequestService} from '../../services/request.service';

@Component({
    selector: 'home',
    templateUrl: '/app/pages/resultat_details/resultat_details.html',
    styleUrls: ['./resultat_details.component.css'],
    providers: [RequestService]
})

export class ResultatDetails implements OnInit {
    rencontres: [JSON];
    scoreRencontre: [JSON];
    private sub: any;
    idResultat: number;
    points: Array<any> = [];
    nbrPoints = 0;

    constructor(public requestService: RequestService, private route: ActivatedRoute, private router: Router) {

    }

    ngOnInit() {
        this.sub = this.route.params.subscribe(params => {
            this.idResultat = +params['id'] - 1; // (+) converts string 'id' to a number
            console.log("id =" + this.idResultat)
            this.chargerRencontres();


        });
    }

    chargerScore(id: number) {
        this.requestService.showScore(id).subscribe((scoreRencontre) => {
            // Local value
            this.scoreRencontre = scoreRencontre;
            this.chargerHeure();
        });
    };

    chargerRencontres() {
        this.requestService.listRencontres().subscribe((rencontres) => {
            // Local value
            this.rencontres = rencontres;
            this.chargerScore(this.idResultat + 1);

        });

    }

    chargerHeure() {
        // console.log(this.scoreRencontre);
        // console.log("debut");
        // for (var i = 0; i < this.scoreRencontre.length; i++) {
        //     console.log(this.scoreRencontre[i].rencontre.sets[0].jeux[3].jeu.id);
        //     for (var j = 0; j < this.rencontres[i].rencontre.sets.length; j++) {
        //         console.log(this.scoreRencontre[i].rencontre.sets[j].set.id)
        //     }
        // }
        // console.log("fin");
        let self = this;

        this.scoreRencontre.forEach(function (currentRencontre) {
            console.log(currentRencontre);
            currentRencontre.rencontre.sets.forEach(function (currentSets) {
                console.log(currentSets);
                currentSets.jeux.forEach(function (currentJeux) {
                    console.log(currentJeux);
                    currentJeux.jeu.points.forEach(function (currentPoints) {
                        self.points.push(currentPoints);
                        console.log(self.points)
                    });
                });
            });
        });
    }
}


