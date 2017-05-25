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
  articles: [JSON];


  constructor(public requestService: RequestService) {
  }

  ngOnInit() {

    this.chargerRencontres();
    this.chargerTournois();
    this.chargerArticles();

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
    if (stringNbr2 === "false") {
      var c = a[stringNbr];
      var d = c;
    } else {
      if (secondSplit === "false") {
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

  getPaysByTournoiId(id) {
    for (let tournoi of this.tournois) {
      if (tournoi["tournoi"].id === id) {
        return tournoi["tournoi"].pays
      }
    }
  }

  chargerArticles() {
    this.requestService.listArticles().subscribe((articles) => {
      this.articles = articles;
       console.log(articles);
    });
  }
}


