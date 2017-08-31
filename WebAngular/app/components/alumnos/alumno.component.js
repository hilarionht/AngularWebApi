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
var router_1 = require("@angular/router");
var alumnos_service_1 = require("../../services/alumnos.service");
var AlumnoComponent = (function () {
    function AlumnoComponent(_alumnoService, route, routeActivate) {
        var _this = this;
        this._alumnoService = _alumnoService;
        this.route = route;
        this.routeActivate = routeActivate;
        this.alumno = {
            nombre: "",
            apellido: "",
            turno: "",
            sexo: "",
            documento: ""
        };
        this.sexos = ["Hombre", "Mujer", "No definido"];
        this.nuevo = false;
        this.routeActivate.params.subscribe(function (param) {
            //console.log(param);
            _this.id = param['id'];
            if (_this.id !== 'nuevo') {
                _this._alumnoService.getAlumno(_this.id).subscribe(function (alumno) { return _this.alumno = alumno; });
            }
        });
    }
    AlumnoComponent.prototype.ngOnInit = function () {
    };
    AlumnoComponent.prototype.guardar = function () {
        var _this = this;
        if (this.id == 'nuevo') {
            //console.log('alumno:' , this.alumno);
            this._alumnoService.nuevoAlumno(this.alumno).subscribe(function (data) {
                _this.route.navigate(['/alumno', data.name]);
            }, function (error) { return console.log(error); });
        }
        else {
            this._alumnoService.editarAlumno(this.alumno, this.id).subscribe(function (data) {
                //console.log(data);
                //this.route.navigate(['/alumno',data.name])
            }, function (error) { return console.log(error); });
        }
    };
    AlumnoComponent.prototype.agregarNuevo = function (forma) {
        this.route.navigate(['/alumno', 'nuevo']);
        forma.reset({
            turno: "Mañana"
        });
    };
    return AlumnoComponent;
}());
AlumnoComponent = __decorate([
    core_1.Component({
        selector: 'app-alumno',
        templateUrl: 'app/components/alumnos/alumno.component.html',
        styles: []
    }),
    __metadata("design:paramtypes", [alumnos_service_1.AlumnosService,
        router_1.Router,
        router_1.ActivatedRoute])
], AlumnoComponent);
exports.AlumnoComponent = AlumnoComponent;
//# sourceMappingURL=alumno.component.js.map