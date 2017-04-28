/**
 * Created by warp on 25/04/2017.
 */
export class Joueur {
  public id: number;
  public id_pays: number;
  public nom: string;
  public prenom: string;
  public date_naissance: Date;
  public url_image: string;

  constructor(id: number, id_pays: number, nom: string, prenom: string, date_naissance: Date, url_image: string) {
    this.id = id;
    this.id_pays = id_pays;
    this.nom = nom;
    this.prenom = prenom;
    this.date_naissance = date_naissance;
    this.url_image = url_image;
  }
  loadJoueurs() {
  }
  afficheJoueur() {
    return 'nom : ' + this.nom + ' prenom : ' + this.prenom;
  }
}
