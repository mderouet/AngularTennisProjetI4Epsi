"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Created by warp on 25/04/2017.
 */
var core_1 = require("@angular/core");
var Resultat = (function () {
    function Resultat(id, date_debut, date_fin, cours_tennis_libelle, cours_tennis_image, id_tournoi, tournoi, equipe_id, equipe_libelle, nom, prenom, uri_image) {
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
    return Resultat;
}());
Resultat = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [Number, Date, Date, String, String, Number, String, Number, String, String, String, String])
], Resultat);
exports.Resultat = Resultat;
//# sourceMappingURL=resultat.service.js.map