import {Component, OnInit} from '@angular/core';
import {RequestService} from "../../services/request.service";
import {Config} from "../../config/config";
import {ActivatedRoute, Router} from "@angular/router";

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
              private router: Router) {

  }

  ngOnInit() {

    this.sub = this.route.params.subscribe(params => {
      this.idArticle = +params['id']; // (+) converts string 'id' to a number
    });

    this.requestService.showArticle(this.idArticle).subscribe((article) => {
      this.article = article;
    });

  }

  generateArray(obj){
    return Object.keys(obj).map((key)=>{ return obj[key]});
  }

}
