//
import {Component, OnInit} from '@angular/core';
import {RequestService} from '../../services/request.service';
import {Config} from "../../config/config";
import {Rencontres} from "../../services/rencontres.service";

@Component({
    selector: 'home',
    templateUrl: '/app/pages/home/home.html',
    providers: [RequestService, Config, Rencontres]
})

export class HomeComponent implements OnInit {
    rencontres: [JSON];
    tournois: [JSON];
    argument: any;


    constructor(public requestService: RequestService) {
    }

    ngOnInit() {

        this.chargerRencontres();
        this.chargerTournois();


        //A corriger, null pointer pour utiliser jquery
        //   jQuery('.matchAVenir').slick({
        //     dots: true,
        //     infinite: true,
        //     speed: 300,
        //     slidesToShow: 1,
        //   });

    }


    splitDate(string, firstSplit, secondSplit, stringNbr, stringNbr2) {
        var a = string.split(firstSplit);
        var b = a[stringNbr];
        if (stringNbr2 == "false") {
            var c = a[stringNbr];
            var d = c;
        } else {
            if (secondSplit == "false") {
                var c = a[stringNbr];
                var d = c;
            } else {
                var c = b.split(secondSplit);
                var d = c[stringNbr2];
            }
        }
        return d
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

    trouveId(objet) {
        return objet.tournoi.id_tournoi == 1
    }

    getPaysByTournoiId(id) {
        for (let tournoi of this.tournois) {
            if (tournoi["tournoi"].id_tournoi == id) {
                return tournoi["tournoi"].pays
            }
        }
    }
}


