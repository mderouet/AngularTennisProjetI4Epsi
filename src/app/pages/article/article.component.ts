import {Component, OnInit} from '@angular/core';
import {RequestService} from "../../services/request.service";
import {Config} from "../../config/config";

@Component({
  selector: 'articles',
  templateUrl: '/app/pages/article/article.html',
  providers: [RequestService, Config],
})
export class ArticleComponent implements OnInit {

  constructor(public requestService: RequestService) {
  }

  ngOnInit() {
    console.log("test");
  }

}
