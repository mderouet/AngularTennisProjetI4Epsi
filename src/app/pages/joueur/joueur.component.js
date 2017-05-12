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
var core_1 = require("@angular/core");
var request_service_1 = require("../../services/request.service");
var config_1 = require("../../config/config");
var joueur_service_1 = require("../../services/joueur.service");
var JoueurComponent = (function () {
    function JoueurComponent(requestService) {
        this.requestService = requestService;
    }
    JoueurComponent.prototype.ngOnInit = function () {
        this.chargerJoueurs();
    };
    //Charge la liste des joueurs et les données qui sont liés
    JoueurComponent.prototype.chargerJoueurs = function () {
        var _this = this;
        this.requestService.listJoueur().subscribe(function (joueurs) {
            _this.joueurs = joueurs;
            for (var j in joueurs) {
                console.log(joueurs[j]);
            }
        });
    };
    return JoueurComponent;
}());
JoueurComponent = __decorate([
    core_1.Component({
        selector: 'joueur',
        templateUrl: '/app/pages/joueur/joueur.html',
        providers: [request_service_1.RequestService, config_1.Config, joueur_service_1.Joueur],
        styleUrls: ['./joueur.component.css']
    }),
    __metadata("design:paramtypes", [request_service_1.RequestService])
], JoueurComponent);
exports.JoueurComponent = JoueurComponent;
//# sourceMappingURL=joueur.component.js.map