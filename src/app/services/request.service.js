"use strict";
/**
 * Created by warp on 29/04/2017.
 */
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
var http_1 = require("@angular/http");
var config_1 = require("../config/config");
require("rxjs/Rx");
var RequestService = (function () {
    function RequestService(http, config) {
        this.http = http;
        this.conf = config;
    }
    /*
     Get base url of API
     */
    RequestService.prototype.getBaseUrl = function () {
        return this.conf.getConfiguration('apiBaseUrl');
    };
    /*
     Methodes Joueurs
     */
    // Liste tous les joueurs
    RequestService.prototype.listJoueur = function () {
        var _this = this;
        return this.getBaseUrl().switchMap(function (url) {
            return _this.http.get(url + 'joueur').map(function (res) { return res = res.json(); });
        });
    };
    // Récupére un joueur par ID
    RequestService.prototype.showJoueur = function (id) {
        var _this = this;
        return this.getBaseUrl().switchMap(function (url) {
            return _this.http.get(url + 'joueur/' + id).map(function (res) { return res = res.json(); });
        });
    };
    /*
     Methodes Arbitres
     */
    // Liste tous les arbitres
    RequestService.prototype.listArbitre = function () {
        var _this = this;
        return this.getBaseUrl().switchMap(function (url) {
            return _this.http.get(url + 'arbitre').map(function (res) { return res = res.json(); });
        });
    };
    // Récupére un arbitre par ID
    RequestService.prototype.showArbitre = function (id) {
        var _this = this;
        return this.getBaseUrl().switchMap(function (url) {
            return _this.http.get(url + 'arbitre/' + id).map(function (res) { return res = res.json(); });
        });
    };
    /*
     Methodes Rencontres
     */
    // Liste tous les arbitres
    RequestService.prototype.listRencontres = function () {
        var _this = this;
        return this.getBaseUrl().switchMap(function (url) {
            return _this.http.get(url + 'rencontre').map(function (res) { return res = res.json(); });
        });
    };
    // Récupére un arbitre par ID
    RequestService.prototype.showRencontre = function (id) {
        var _this = this;
        return this.getBaseUrl().switchMap(function (url) {
            return _this.http.get(url + 'rencontres/' + id).map(function (res) { return res = res.json(); });
        });
    };
    /*
     Methodes Tournois
     */
    // Liste tous les tournois
    RequestService.prototype.listTournois = function () {
        var _this = this;
        return this.getBaseUrl().switchMap(function (url) {
            return _this.http.get(url + 'tournoi').map(function (res) { return res = res.json(); });
        });
    };
    // Récupére un tournoi par ID
    RequestService.prototype.showTournoi = function (id) {
        var _this = this;
        return this.getBaseUrl().switchMap(function (url) {
            return _this.http.get(url + 'tournoi/' + id).map(function (res) { return res = res.json(); });
        });
    };
    return RequestService;
}());
RequestService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http, config_1.Config])
], RequestService);
exports.RequestService = RequestService;
//# sourceMappingURL=request.service.js.map