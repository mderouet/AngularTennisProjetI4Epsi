"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var AppComponent = (function () {
    function AppComponent() {
    }
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'my-app',
        template: '<header><div class="menuTop"><div class="row"><div id="imgLogoHeader" class="large-4 medium-3 small-6 columns">' +
            '<img src="assets/img/logo.png"></div><div class="large-8 medium-9 small-6 columns"><ul class="menu"><li><a href="/home">Accueil</a></li>' +
            '<li><a href="/joueurs">Liste Joueurs</a></li><li><a href="#">Résultats</a></li> <li><a href="#">Calendrier</a></li> <li><a href="#">Actualité</a></li>' +
            ' <li><a href="#">Contact</a></li>' +
            ' </ul> </div> </div></div><section class="slickMatchAVenir">' +
            '<div class="container-full section1"><div class="container">' +
            '<div class="matchAVenir"><div class="matchs"><h2>Match à venir</h2><h1>Nadal <span style="font-size: 3em">/</span> Djokovic</h1><h3>Tournois Roland Garros <br/> 12 Mars 2017</h3> <div> <span><a href="#">Decouvrir</a></span> </div> </div> </div> </div> </div> </section></header><router-outlet></router-outlet>' +
            '<footer><div id="copyright">Copyright© 2017 - Make Tennis Great Again</div> <div id="mentionLegale">' +
            ' <a href="#">Mention Légale</a></div>' +
            '<script type="text/javascript" src="assets/js/jquery-3.1.1.min.js"></script>' +
            '<script type="text/javascript" src="assets/slickjs/js/slick.min.js"></script>' +
            '<script type="text/javascript" src="assets/foundation/js/foundation.min.js"></script>' +
            '<script type="text/javascript" src="assets/js/javascript.js"></script>' +
            '</footer>',
    })
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map