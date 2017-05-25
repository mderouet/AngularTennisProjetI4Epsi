//
import {Component, OnInit} from '@angular/core';
import {Router, ActivatedRoute, Params} from '@angular/router';
import {RequestService} from '../../services/request.service';
import {Config} from "../../config/config";

@Component({
    selector: 'home',
    templateUrl: '/app/pages/resultat/resultat.html',
    styleUrls: ['./resultat.component.css'],
    providers: [RequestService, Config]
})

export class ResultatComponent implements OnInit {
    rencontres: [JSON];
    tournois: [JSON];
    argument: any;
    private sub: any;
    id: number;

    constructor(public requestService: RequestService, private route: ActivatedRoute, private router: Router,) {

    }

    ngOnInit() {

        this.chargerRencontres();
        this.chargerTournois();

        this.sub = this.route.params.subscribe(params => {
            this.id = +params['id']; // (+) converts string 'id' to a number
            console.log(this.id);
            // this.p=Personnes.find(x => x.id == this.id);
        });
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

    getAllRencontresFinished() {
        for (let rencontre of this.rencontres) {
            if (rencontre["rencontre"].date_debut != null) {
                return rencontre["rencontre"].id_rencontre
            }
        }
    }
}


