import {Component, OnInit} from '@angular/core';
import {RequestService} from "../../services/request.service";
import {Config} from "../../config/config";
import {Rencontres} from "../../services/rencontres.service";

@Component({
    selector: 'rencontres',
    templateUrl: '/app/pages/rencontres/rencontres.html',
    providers: [RequestService, Config, Rencontres],
    // styleUrls:  ['rencontres.component.css']
})
export class RencontresComponent implements OnInit {
    rencontres: [JSON];

    constructor(public requestService: RequestService) {
    }

    ngOnInit() {
        this.chargerRencontres();
    }

    chargerRencontres() {
        this.requestService.listRencontres().subscribe((rencontres) => {
            this.rencontres = rencontres;
        });
    }
}
