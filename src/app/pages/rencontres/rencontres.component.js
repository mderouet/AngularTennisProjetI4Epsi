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
var rencontres_service_1 = require("../../services/rencontres.service");
var RencontresComponent = (function () {
    function RencontresComponent(requestService) {
        this.requestService = requestService;
    }
    RencontresComponent.prototype.ngOnInit = function () {
        this.chargerRencontres();
    };
    RencontresComponent.prototype.chargerRencontres = function () {
        var _this = this;
        this.requestService.listRencontres().subscribe(function (rencontres) {
            _this.rencontres = rencontres;
        });
    };
    return RencontresComponent;
}());
RencontresComponent = __decorate([
    core_1.Component({
        selector: 'rencontres',
        templateUrl: '/app/pages/rencontres/rencontres.html',
        providers: [request_service_1.RequestService, config_1.Config, rencontres_service_1.Rencontres],
    }),
    __metadata("design:paramtypes", [request_service_1.RequestService])
], RencontresComponent);
exports.RencontresComponent = RencontresComponent;
//# sourceMappingURL=rencontres.component.js.map