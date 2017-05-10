/**
 * Created by warp on 29/04/2017.
 */

import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Config } from '../config/config';
import 'rxjs/Rx';
import {Observable} from "rxjs";

@Injectable()
export class RequestService {
  conf: Config;
  result: Object;

  constructor(public http: Http, config: Config) {
    this.conf = config;
  }
  //retourne la liste des joueurs
  listJoueur(): Observable<any> {
    return this.getBaseUrl().switchMap((url: any) =>
      this.http.get(url + 'joueur').map(res => res = res.json()));
  }

  showJoueur(id: number): Observable<any> {
    return this.getBaseUrl().switchMap((url: any) =>
      this.http.get(url + 'joueur/' + id).map(res => res = res.json()));
  }

  getBaseUrl() {
    return this.conf.getConfiguration('apiBaseUrl');
  }
}
