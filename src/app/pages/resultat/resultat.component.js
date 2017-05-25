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
//
var core_1 = require("@angular/core");
var request_service_1 = require("../../services/request.service");
var config_1 = require("../../config/config");
var resultat_service_1 = require("../../services/resultat.service");
var ResultatComponent = (function () {
    function ResultatComponent(requestService) {
        this.requestService = requestService;
    }
    ResultatComponent.prototype.ngOnInit = function () {
        this.chargerRencontres();
        this.chargerTournois();
    };
    ResultatComponent.prototype.chargerRencontres = function () {
        var _this = this;
        this.requestService.listRencontres().subscribe(function (rencontres) {
            _this.rencontres = rencontres;
        });
    };
    ResultatComponent.prototype.chargerTournois = function () {
        var _this = this;
        this.requestService.listTournois().subscribe(function (tournois) {
            _this.tournois = tournois;
            // console.log(tournois);
        });
    };
    ResultatComponent.prototype.getImgTournoi = function (id) {
        for (var _i = 0, _a = this.tournois; _i < _a.length; _i++) {
            var tournoi = _a[_i];
            if (tournoi["tournoi"].id_tournoi == id) {
                return tournoi["tournoi"].url_image;
            }
        }
    };
    ResultatComponent.prototype.trouveId = function (objet) {
        return objet.tournoi.id_tournoi == 1;
    };
    return ResultatComponent;
}());
ResultatComponent = __decorate([
    core_1.Component({
        selector: 'home',
        templateUrl: '/app/pages/resultat/resultat.html',
        styleUrls: ['./resultat.component.css'],
        providers: [request_service_1.RequestService, config_1.Config, resultat_service_1.Resultat]
    }),
    __metadata("design:paramtypes", [request_service_1.RequestService])
], ResultatComponent);
exports.ResultatComponent = ResultatComponent;
//# sourceMappingURL=resultat.component.js.map