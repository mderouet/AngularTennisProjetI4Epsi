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

    // Récupére un arbitre par ID
    showRencontre(id: number): Observable<any> {
        return this.getBaseUrl().switchMap((url: any) =>
            this.http.get(url + 'rencontres/' + id).map(res => res = res.json()));
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

    // // Liste tous les joueurs
    // ugo(id: number): Observable<any> {
    //     return this.getBaseUrl().switchMap((url: any) =>
    //         this.http.get(url + 'tournoi/'+id).map(res => res = res.json()));
    // }


}
