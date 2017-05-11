
import {Component, OnInit} from '@angular/core';
import {RequestService} from '../../services/request.service';
import {Config} from "../../config/config";

@Component({
    selector: 'home',
    templateUrl: '/app/pages/home/home.html',
    providers: [RequestService, Config]
})

export class HomeComponent implements OnInit {

  constructor(public requestService: RequestService) {
  }
    ngOnInit() {



    //A corriger, null pointer pour utiliser jquery
    //  $('.matchAVenir').slick({
    //    dots: true,
    //    infinite: true,
    //    speed: 300,
    //    slidesToShow: 1,
    //  });
    }
}

