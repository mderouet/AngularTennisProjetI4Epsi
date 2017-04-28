/**
 * Created by Ugo on 29/03/2017.
 */
"use strict";
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
exports.Personne = Personne;
//# sourceMappingURL=personne.js.map