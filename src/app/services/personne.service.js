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
 * Created by Ugo on 29/03/2017.
 */
var core_1 = require("@angular/core");
var Personne = (function () {
    function Personne(nom, prenom, age) {
        this.nom = nom;
        this.prenom = prenom;
        this.age = age;
    }
    Personne.prototype.presentation = function () {
        return 'Je mappelle ' + this.nom + ' ' + this.prenom + ', et je suis agée de ' + this.age;
    };
    return Personne;
}());
Personne = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [String, String, Number])
], Personne);
exports.Personne = Personne;
//# sourceMappingURL=personne.service.js.map