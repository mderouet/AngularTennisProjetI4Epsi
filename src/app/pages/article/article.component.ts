import {Component, OnInit} from '@angular/core';
import {RequestService} from "../../services/request.service";
import {Config} from "../../config/config";
import {ActivatedRoute, Router} from "@angular/router";
import {CacheService} from "../../services/cache.service";

@Component({
  selector: 'articles',
  templateUrl: '/app/pages/article/article.html',
  providers: [RequestService, Config],
  styleUrls: ['./article.component.css'],

})

export class ArticleComponent implements OnInit {

  private sub: any;
  private idArticle: number;
  private article: [JSON];
  constructor(public requestService: RequestService, private route: ActivatedRoute,
              private router: Router,                private cacheService: CacheService) {

  }

  ngOnInit() {

    this.sub = this.route.params.subscribe(params => {
      this.idArticle = +params['id']; // (+) converts string 'id' to a number
      console.log(this.idArticle);
    });

    this.requestService.showArticle(this.idArticle).subscribe((article) => {
      this.article = article;
      console.log(this.article);
    });

  }

  generateArray(obj){
    return Object.keys(obj).map((key)=>{ return obj[key]});
  }

}
