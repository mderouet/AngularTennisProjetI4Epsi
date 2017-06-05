/**
 * Created by warp on 29/04/2017.
 */

import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import {Config} from '../config/config';
import 'rxjs/Rx';
import {Observable} from "rxjs";

@Injectable()
export class RequestService {
  conf: Config;
  result: Object;

  constructor(public http: Http, config: Config) {
    this.conf = config;
  }

  /*
   Get base url of API
   */
  getBaseUrl() {
    return this.conf.getConfiguration('apiBaseUrl');
  }

  /*
   Methodes Joueurs
   */

  // Liste tous les joueurs
  listJoueur(): Observable<any> {
    return this.getBaseUrl().switchMap((url: any) =>
      this.http.get(url + 'joueur').map(res => res = res.json()));
  }

  // Récupére un joueur par ID
  showJoueur(id: number): Observable<any> {
    return this.getBaseUrl().switchMap((url: any) =>
      this.http.get(url + 'joueur/' + id).map(res => res = res.json()));
  }

  /*
   Methodes Arbitres
   */

  // Liste tous les arbitres
  listArbitre(): Observable<any> {
    return this.getBaseUrl().switchMap((url: any) =>
      this.http.get(url + 'arbitre').map(res => res = res.json()));
  }

  // Récupére un arbitre par ID
  showArbitre(id: number): Observable<any> {
    return this.getBaseUrl().switchMap((url: any) =>
      this.http.get(url + 'arbitre/' + id).map(res => res = res.json()));
  }


  /*
   Methodes Rencontres
   */

  // Liste tous les arbitres
  listRencontres(): Observable<any> {
    return this.getBaseUrl().switchMap((url: any) =>
      this.http.get(url + 'rencontre').map(res => res = res.json()));
  }

  // Récupére une rencontre par id
  showRencontre(id: number): Observable<any> {
    return this.getBaseUrl().switchMap((url: any) =>
      this.http.get(url + 'rencontre/' + id).map(res => res = res.json()));
  }

  // Rencontres à venir d'un tournoi
  prochainesRencontreParTournoi(id: number): Observable<any> {
    return this.getBaseUrl().switchMap((url: any) =>
      this.http.get(url + '/rencontre?id_tournoi=' + id).map(res => res = res.json()));
  }

  // Renvoi la prochaine rencontre d'un tournoi
  prochaineRencontreParTournoi(id: number): Observable<any> {
    return this.getBaseUrl().switchMap((url: any) =>
      this.http.get(url + 'rencontre?id_tournoi=' + id + '&next=1').map(res => res = res.json()));
  }

  // Renvoi la prochaine rencontre du prochain tournoi
  prochaineRencontreTournoi(): Observable<any> {
    return this.http.get('http://projet-tennis.ddns.net/tournoi?next=1')
      .map((res: any)=> res.json())
      .flatMap((tournoi: any)=>{
      return this.http.get('http://projet-tennis.ddns.net/rencontre?id_tournoi=' + tournoi.id + '&next=1')
        .map((res: any) => res.json())
    });
  }

  /*
   Methodes Tournois
   */

  // Liste tous les tournois
  listTournois(): Observable<any> {
    return this.getBaseUrl().switchMap((url: any) =>
      this.http.get(url + 'tournoi').map(res => res = res.json()));
  }
  // Récupére un tournoi par ID
  showTournoi(id: number): Observable<any> {
    return this.getBaseUrl().switchMap((url: any) =>
      this.http.get(url + 'tournoi/' + id).map(res => res = res.json()));
  }

  // Récupére le prochain tournoi (date)
  prochainTournoi(): Observable<any> {
    return this.getBaseUrl().switchMap((url: any) =>
      this.http.get(url + 'tournoi?next=1').map(res => res = res.json()));
  }

  /*
   Methodes Articles
   */
  // Liste tous les articles

  listArticles(): Observable<any> {
    return this.getBaseUrl().switchMap((url: any) =>
      this.http.get(url + 'article').map(res => res = res.json()));
  }
  // Renvoi un article par
  showArticle(id: number): Observable<any> {
    return this.getBaseUrl().switchMap((url: any) =>
      this.http.get(url + 'article/' + id).map(res => res = res.json()));
  }
  /*
   Methodes Score
   */
  showScore(id: number): Observable<any> {
    return this.getBaseUrl().switchMap((url: any) =>
      this.http.get(url + 'rencontre/score/' + id).map(res => res = res.json()));
  }


}
