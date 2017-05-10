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
/**
 * Created by warp on 25/04/2017.
 */
var core_1 = require("@angular/core");
var cerialize_1 = require("cerialize");
var Joueur = (function () {
    function Joueur(id, id_pays, nom, prenom, date_naissance, url_image) {
        this.id = id;
        this.id_pays = id_pays;
        this.nom = nom;
        this.prenom = prenom;
        this.date_naissance = date_naissance;
        this.url_image = url_image;
    }
    Joueur.prototype.afficheJoueur = function () {
        return 'Nom : ' + this.nom + ' Prenom : ' + this.prenom;
    };
    Joueur.prototype.unserialize = function () {
    };
    return Joueur;
}());
__decorate([
    cerialize_1.deserialize,
    __metadata("design:type", Number)
], Joueur.prototype, "id", void 0);
Joueur = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [Number, Number, String, String, Date, String])
], Joueur);
exports.Joueur = Joueur;
//# sourceMappingURL=joueur.service.js.map