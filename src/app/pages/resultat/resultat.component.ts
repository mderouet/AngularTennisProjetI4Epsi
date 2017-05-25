//
import {Component, OnInit} from '@angular/core';
import {RequestService} from '../../services/request.service';
import {Config} from "../../config/config";
import {Resultat} from "../../services/resultat.service";

@Component({
    selector: 'home',
    templateUrl: '/app/pages/resultat/resultat.html',
    styleUrls: ['./resultat.component.css'],
    providers: [RequestService, Config, Resultat]
})

export class ResultatComponent implements OnInit {
    rencontres: [JSON];
    tournois: [JSON];
    argument: any;


    constructor(public requestService: RequestService) {
    }

    ngOnInit() {

        this.chargerRencontres();
        this.chargerTournois();
    }

    chargerRencontres() {
        this.requestService.listRencontres().subscribe((rencontres) => {
            this.rencontres = rencontres;
        });
    }

    chargerTournois() {
        this.requestService.listTournois().subscribe((tournois) => {
            this.tournois = tournois;
            // console.log(tournois);
        });
    }

    getImgTournoi(id) {
        for (let tournoi of this.tournois) {
            if (tournoi["tournoi"].id_tournoi == id) {
                return tournoi["tournoi"].url_image
            }
        }
    }

    trouveId(objet) {
        return objet.tournoi.id_tournoi == 1
    }
}


