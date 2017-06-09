import {Injectable} from "@angular/core";
/**
 * Created by Warp on 26/05/2017.
 */


@Injectable()
export class CacheService {


  private _rencontres: [any];
  private _tournois: [any];
  private _articles: [any];
  private _joueurs: [any];

  constructor() {

  }

  get rencontres(): [any] {
    return this._rencontres;
  }

  set rencontres(value: [any]) {
    this._rencontres = value;
  }

  get tournois(): [any] {
    return this._tournois;
  }

  set tournois(value: [any]) {
    this._tournois = value;
  }

  get articles(): [any] {
    return this._articles;
  }

  set articles(value: [any]) {
    this._articles = value;
  }
  get joueurs(): [any] {
    return this._joueurs;
  }

  set joueurs(value: [any]) {
    this._joueurs = value;
  }

}
