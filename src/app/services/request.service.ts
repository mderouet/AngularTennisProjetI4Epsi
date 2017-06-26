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
  url: String = "http://projet-tennis.ddns.net:3000/";
  constructor(public http: Http, config: Config) {
    this.conf = config;
  }

  /*
   Get base url of API
   */
  getBaseUrl() {
    return this.url;
  }

  /*
   Methodes Joueurs
   */

  // Liste tous les joueurs
  listJoueur(): Observable<any> {
    return this.http.get(this.getBaseUrl()+ 'joueur').map(res => res = res.json());
  }

  // Récupére un joueur par ID
  showJoueur(id: number): Observable<any> {
    return this.http.get(this.getBaseUrl() + 'joueur/' + id).map(res => res = res.json());

  }

  /*
   Methodes Arbitres
   */

  // Liste tous les arbitres
  listArbitre(): Observable<any> {
    return this.http.get(this.getBaseUrl() + 'arbitre').map(res => res = res.json());
  }

  // Récupére un arbitre par ID
  showArbitre(id: number): Observable<any> {
    return this.http.get(this.getBaseUrl() + 'arbitre/' + id).map(res => res = res.json());
  }


  /*
   Methodes Rencontres
   */

  // Liste tous les arbitres
  listRencontres(): Observable<any> {
    return this.http.get(this.getBaseUrl() + 'rencontre').map(res => res = res.json());
  }

  // Récupére une rencontre par id
  showRencontre(id: number): Observable<any> {
    return this.http.get(this.getBaseUrl() + 'rencontre/' + id).map(res => res = res.json());
  }

  // Rencontres à venir d'un tournoi
  prochainesRencontreParTournoi(id: number): Observable<any> {
    return this.http.get(this.getBaseUrl() + '/rencontre?id_tournoi=' + id).map(res => res = res.json());
  }

  // Renvoi la prochaine rencontre d'un tournoi
  prochaineRencontreParTournoi(id: number): Observable<any> {
    return this.http.get(this.getBaseUrl() + 'rencontre?id_tournoi=' + id + '&next=1').map(res => res = res.json());
  }

  // Renvoi la prochaine rencontre du prochain tournoi
  prochaineRencontreTournoi(): Observable<any> {
    return this.http.get(this.getBaseUrl()+'tournoi?next=1')
      .map((res: any)=> res.json())
      .flatMap((tournoi: any)=>{
      return this.http.get(this.getBaseUrl()+'rencontre/tournoi/' + tournoi.id + '/next/1')
        .map((res: any) => res.json())
    });
  }
  // Renvoi les 4 prochaines rencontres du prochain tournoi
  prochainesRencontreTournoi(): Observable<any> {
    return this.http.get(this.getBaseUrl()+'tournoi?next=1')
      .map((res: any)=> res.json())
      .flatMap((tournoi: any)=>{
        return this.http.get(this.getBaseUrl()+'rencontre/tournoi/' + tournoi.id + '/next/4')
          .map((res: any) => res.json())
      });
  }

  /*
   Methodes Tournois
   */

  // Liste tous les tournois
  listTournois(): Observable<any> {
    return this.http.get(this.getBaseUrl() + 'tournoi').map(res => res = res.json());
  }
  // Récupére un tournoi par ID
  showTournoi(id: number): Observable<any> {
    return this.http.get(this.getBaseUrl() + 'tournoi/' + id).map(res => res = res.json());
  }

  // Récupére le prochain tournoi (date)
  prochainTournoi(): Observable<any> {
    return this.http.get(this.getBaseUrl() + 'tournoi?next=1').map(res => res = res.json());
  }

  /*
   Methodes Articles
   */
  // Liste tous les articles

  listArticles(): Observable<any> {
    return this.http.get(this.getBaseUrl() + 'article').map(res => res = res.json());
  }
  // Renvoi un article par
  showArticle(id: number): Observable<any> {
    return this.http.get(this.getBaseUrl() + 'article/' + id).map(res => res = res.json());
  }
  /*
   Methodes Score
   */

  // Récupérer score d'une rencontre
  showScore(id: number): Observable<any> {
    return this.http.get(this.getBaseUrl() + 'rencontre/score/' + id).map(res => res = res.json());
  }
  // Récupérer le résumé d'une rencontre
  resumeRencontre(id: number): Observable<any> {
    return this.http.get(this.getBaseUrl() + '/rencontre/resume/' + id).map(res => res = res.json());
  }

  /*
   Methodes Alerts
   */
  showAlert(id: number): Observable<any> {
     return this.http.get(this.getBaseUrl() + 'alerte/' + id).map(res => res = res.json());
  }




}
