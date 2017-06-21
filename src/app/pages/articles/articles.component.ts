import {Component, OnInit} from '@angular/core';
import {RequestService} from "../../services/request.service";
import {Config} from "../../config/config";
import {ActivatedRoute, Router} from "@angular/router";
import {CacheService} from "../../services/cache.service";
import {UtilsService} from "../../services/utils.service";

@Component({
  selector: 'articles',
  templateUrl: '/app/pages/articles/articles.html',
  providers: [RequestService, Config, UtilsService],
  styleUrls: ['./articles.component.css'],
})

export class ArticlesComponent implements OnInit, CacheInterface {

  articles: [JSON];

  constructor(public requestService: RequestService, private route: ActivatedRoute,
              private router: Router, private cacheService: CacheService, public utilsService: UtilsService) {

  }

  ngOnInit() {

    this.initCache();

    if(this.utilsService.isEmptyObject(this.cacheService.articles)){
      console.log("Chargement articles HOME PAGE")
      this.chargerArticles();
    }
  }

  chargerArticles() {
    this.requestService.listArticles().subscribe((articles) => {
      // Local value
      this.articles = articles;
      // Cache
      this.cacheService.articles = articles;
    });
  }

  initCache(){
    if(!this.utilsService.isEmptyObject(this.cacheService.articles)){
      this.articles = this.cacheService.articles;
    }
  }

  clearCache(){
    this.cacheService.articles = null;
  }

}
