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
var alumnos_service_1 = require("../../services/alumnos.service");
var AlumnosComponent = (function () {
    function AlumnosComponent(_alumnoService) {
        var _this = this;
        this._alumnoService = _alumnoService;
        this.alumnos = [];
        this.loading = true;
        this._alumnoService.getAlumnos()
            .subscribe(function (data) {
            // setTimeout(()=> {
            //   this.loading = false;
            //   this.alumnos = data;
            // },3000);
            _this.alumnos = data;
            _this.loading = false;
            //console.log(data);
        });
    }
    AlumnosComponent.prototype.ngOnInit = function () {
    };
    AlumnosComponent.prototype.deleteAlumno = function (key$) {
        var _this = this;
        this._alumnoService.deleteAlumno(key$)
            .subscribe(function (respuesta) {
            //console.log(respuesta);
            if (respuesta) {
                console.log("error");
            }
            else {
                delete _this.alumnos[key$];
            }
        });
    };
    return AlumnosComponent;
}());
AlumnosComponent = __decorate([
    core_1.Component({
        selector: 'app-alumnos',
        templateUrl: 'app/components/alumnos/alumnos.component.html',
        styles: []
    }),
    __metadata("design:paramtypes", [alumnos_service_1.AlumnosService])
], AlumnosComponent);
exports.AlumnosComponent = AlumnosComponent;
//# sourceMappingURL=alumnos.component.js.map