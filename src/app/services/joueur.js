"use strict";
/**
 * Created by warp on 25/04/2017.
 */
var Joueur = (function () {
    function Joueur(id, id_pays, nom, prenom, date_naissance, url_image) {
        this.id = id;
        this.id_pays = id_pays;
        this.nom = nom;
        this.prenom = prenom;
        this.date_naissance = date_naissance;
        this.url_image = url_image;
    }
    Joueur.prototype.loadJoueurs = function () {
    };
    Joueur.prototype.afficheJoueur = function () {
        return 'nom : ' + this.nom + ' prenom : ' + this.prenom;
    };
    return Joueur;
}());
exports.Joueur = Joueur;
//# sourceMappingURL=joueur.js.map