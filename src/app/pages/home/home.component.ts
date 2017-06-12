
import {Component, OnInit} from '@angular/core';
import {RequestService} from '../../services/request.service';
import {Config} from "../../config/config";
import {Rencontres} from "../../services/rencontres.service";
import {CacheService} from "../../services/cache.service";
import {UtilsService} from "../../services/utils.service";

@Component({
  selector: 'home',
  templateUrl: '/app/pages/home/home.html',
  providers: [RequestService, Config, Rencontres, UtilsService],
  styleUrls: ['./home.component.css'],
})

export class HomeComponent implements OnInit, CacheInterface {
  rencontres: [JSON];
  tournois: [JSON];
  articles: [JSON];

  constructor(public requestService: RequestService, public cacheService: CacheService, public utilsService: UtilsService) {
  }

  ngOnInit() {

  this.initCache();

   if(this.utilsService.isEmptyObject(this.cacheService.rencontres)){
     console.log("Chargement recontres HOME PAGE")
     this.chargerRencontres();
   }
    if(this.utilsService.isEmptyObject(this.cacheService.tournois)){
      console.log("Chargement tournois HOME PAGE")
      this.chargerTournois();
    }
    if(this.utilsService.isEmptyObject(this.cacheService.articles)){
      console.log("Chargement articles HOME PAGE")
      this.chargerArticles();
    }
  }

  initCache(){
    if(!this.utilsService.isEmptyObject(this.cacheService.rencontres)){
      this.rencontres = this.cacheService.rencontres;
    }
    if(!this.utilsService.isEmptyObject(this.cacheService.tournois)){
      this.tournois = this.cacheService.tournois;
    }
    if(!this.utilsService.isEmptyObject(this.cacheService.articles)){
      this.articles = this.cacheService.articles;
    }
  }

  clearCache(){
  this.cacheService.rencontres = null;
  this.cacheService.tournois = null;
  this.cacheService.articles = null;
  }

  //TODO Delete si pas besoin JP
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
      // Local value
      this.rencontres = rencontres;
      console.log(this.rencontres);

      // Cache
      this.cacheService.rencontres = rencontres;

    });
  }

  chargerTournois() {
    this.requestService.listTournois().subscribe((tournois) => {
      // Local value
      this.tournois = tournois;
      // Cache
      this.cacheService.tournois = tournois;
    });
  }

  chargerArticles() {
    this.requestService.listArticles().subscribe((articles) => {
      // Local value
      this.articles = articles;
      // Cache
      this.cacheService.articles = articles;
    });
  }

  getPaysByTournoiId(id) {
    for (let tournoi of this.tournois) {
      if (tournoi["tournoi"].id === id) {
        return tournoi["tournoi"].pays
      }
    }
  }

}


