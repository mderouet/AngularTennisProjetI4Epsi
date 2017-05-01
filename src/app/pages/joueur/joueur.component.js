/**
 * Created by warp on 25/04/2017.
 */
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
var core_1 = require("@angular/core");
var joueur_service_1 = require("../../services/joueur.service");
var JoueurComponent = (function () {
    function JoueurComponent() {
    }
    JoueurComponent.prototype.ngOnInit = function () {
        this.joueur = new joueur_service_1.Joueur(1, 1, 'Derouet', 'martin', new Date(), 'URL_IMAGE');
    };
    return JoueurComponent;
}());
JoueurComponent = __decorate([
    core_1.Component({
        selector: 'joueur',
        templateUrl: '/app/pages/joueur/joueur.html'
    }),
    __metadata("design:paramtypes", [])
], JoueurComponent);
exports.JoueurComponent = JoueurComponent;
//# sourceMappingURL=joueur.component.js.map