/**
 * Created by warp on 25/04/2017.
 */
import {Injectable} from '@angular/core';

@Injectable()
export class Resultat {

    public id: number;
    public date_debut: Date;
    public date_fin: Date;
    public cours_tennis_libelle: string;
    public cours_tennis_image: string;
    public id_tournoi: number;
    public tournoi: string;
    public equipe_id: number;
    public equipe_libelle: string;
    public nom: string;
    public prenom: string;
    public uri_image: string;


    constructor(id: number, date_debut: Date, date_fin: Date, cours_tennis_libelle: string, cours_tennis_image: string, id_tournoi: number, tournoi: string, equipe_id: number, equipe_libelle: string, nom: string, prenom: string, uri_image: string) {
        this.id = id;
        this.date_debut = date_debut;
        this.date_fin = date_fin;
        this.cours_tennis_libelle = cours_tennis_libelle;
        this.cours_tennis_image = cours_tennis_image;
        this.id_tournoi = id_tournoi;
        this.tournoi = tournoi;
        this.equipe_id = equipe_id;
        this.equipe_libelle = equipe_libelle;
        this.nom = nom;
        this.prenom = prenom;
        this.uri_image = uri_image;
    }

}
