"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var router_1 = require("@angular/router");
var home_component_1 = require("./pages/home/home.component");
var joueur_component_1 = require("./pages/joueur/joueur.component");
exports.router = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: home_component_1.HomeComponent },
    { path: 'joueurs', component: joueur_component_1.JoueurComponent }
];
exports.routes = router_1.RouterModule.forRoot(exports.router);
//# sourceMappingURL=app.routes.js.map