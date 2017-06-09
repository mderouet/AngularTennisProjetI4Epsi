import {Injectable} from "@angular/core";
/**
 * Created by Warp on 26/05/2017.
 */


@Injectable()
export class CacheService {


  private _rencontres: [JSON] = null;
  private _tournois: [JSON] = null;
  private _articles: [JSON] = null;
  private _joueurs: [JSON] = null;

  constructor() {

  }

  get rencontres(): [JSON] {
    return this._rencontres;
  }

  set rencontres(value: [JSON]) {
    this._rencontres = value;
  }

  get tournois(): [JSON] {
    return this._tournois;
  }

  set tournois(value: [JSON]) {
    this._tournois = value;
  }

  get articles(): [JSON] {
    return this._articles;
  }

  set articles(value: [JSON]) {
    this._articles = value;
  }
  get joueurs(): [JSON] {
    return this._joueurs;
  }

  set joueurs(value: [JSON]) {
    this._joueurs = value;
  }

}
