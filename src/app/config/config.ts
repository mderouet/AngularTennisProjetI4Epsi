/**
 * Created by warp on 30/04/2017.
 */

import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class Config {
  private http: any;
  result: Object;

  constructor(http: Http) {
    this.http = http;
  }
  getConfiguration(key) {
    return this.http.get('./app/config/development.json').map(res => {
      this.result = res.json();
      return this.result[key];
    });
  }
}


