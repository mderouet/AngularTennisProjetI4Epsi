/**
 * Created by Ugo on 30/03/2017.
 */
import {Component, OnInit} from '@angular/core';
import {RequestService} from '../../services/request.service';
import {Config} from "../../config/config";

declare let $: any;

@Component({
    selector: 'home',
    templateUrl: '/app/pages/home/home.html',
    providers: [RequestService, Config]
})

export class HomeComponent implements OnInit {

  users: any[];

  constructor(public requestService: RequestService) {
  }
    ngOnInit() {

    this.requestService.getJoueurs().subscribe((joueurs) => console.log(joueurs));

    //A corriger, null pointer pour utiliser jquery
      /*$('.matchAVenir').slick({
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
      });*/
    }
}

