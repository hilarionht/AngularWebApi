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
var equipos_service_1 = require("../../services/equipos.service");
var EquiposComponent = (function () {
    function EquiposComponent(_equipoService) {
        var _this = this;
        this._equipoService = _equipoService;
        this.equipos = [];
        this.loading = true;
        this._equipoService.getEquipos()
            .subscribe(function (data) {
            // setTimeout(()=> {
            //   this.loading = false;
            //   this.alumnos = data;
            // },3000);
            _this.equipos = data;
            _this.loading = false;
            //console.log(data);
        });
    }
    EquiposComponent.prototype.ngOnInit = function () {
    };
    return EquiposComponent;
}());
EquiposComponent = __decorate([
    core_1.Component({
        selector: 'app-equipos',
        templateUrl: 'app/components/equipos/equipos.component.html',
        styles: []
    }),
    __metadata("design:paramtypes", [equipos_service_1.EquiposService])
], EquiposComponent);
exports.EquiposComponent = EquiposComponent;
//# sourceMappingURL=equipos.component.js.map