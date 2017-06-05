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

    scoreRencontre:[JSON];
    private sub: any;
    idResultat: number;

    constructor(public requestService: RequestService, private route: ActivatedRoute, private router: Router) {

    }

    ngOnInit() {
      this.sub = this.route.params.subscribe(params => {
        this.idResultat = +params['id']; // (+) converts string 'id' to a number
        this.chargerScore(this.idResultat);
      });
    }

  chargerScore(id:number) {
    this.requestService.showScore(id).subscribe((scoreRencontre) => {
      // Local value
      this.scoreRencontre = scoreRencontre;

      console.log(scoreRencontre);
    });
  }
}


