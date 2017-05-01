/**
 * Created by warp on 29/04/2017.
 */

import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Config } from '../config/config';
import 'rxjs/Rx';

@Injectable()
export class RequestService {
  url: any;
  conf: Config;
  constructor(public http: Http, config: Config) {
    this.conf = config;
  }

  getJoueurs() {
    this.conf.getConfiguration('apiBaseUrl').subscribe((url: any) => {
      return this.http.get(url + 'joueur').map(res => res = res.json());
    });
  }

  getBaseUrl() {
  }
}
