"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var router_1 = require("@angular/router");
var home_component_1 = require("./pages/home/home.component");
var joueur_component_1 = require("./pages/joueur/joueur.component");
var rencontres_component_1 = require("./pages/rencontres/rencontres.component");
var resultat_component_1 = require("./pages/resultat/resultat.component");
exports.router = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: home_component_1.HomeComponent },
    { path: 'joueurs', component: joueur_component_1.JoueurComponent },
    { path: 'rencontres', component: rencontres_component_1.RencontresComponent },
    { path: 'resultat', component: resultat_component_1.ResultatComponent },
];
exports.routes = router_1.RouterModule.forRoot(exports.router);
//# sourceMappingURL=app.routes.js.map