"use strict";
var router_1 = require("@angular/router");
var home_1 = require("./pages/home/home");
var vueJoueur_1 = require("./pages/vueJoueur/vueJoueur");
exports.router = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: home_1.Home },
    { path: 'vueJoueur', component: vueJoueur_1.VueJoueur }
];
exports.routes = router_1.RouterModule.forRoot(exports.router);
//# sourceMappingURL=app.routes.js.map