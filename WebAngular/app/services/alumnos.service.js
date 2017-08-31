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
var http_1 = require("@angular/http");
require("rxjs/Rx");
var AlumnosService = (function () {
    function AlumnosService(http) {
        this.http = http;
        this.aluURL = "https://heroesapp-ba9fc.firebaseio.com/Alumnos.json";
        this.editURL = "https://heroesapp-ba9fc.firebaseio.com/Alumnos/";
    }
    AlumnosService.prototype.nuevoAlumno = function (alumno) {
        var body = JSON.stringify(alumno);
        var headers = new http_1.Headers({
            'Content-Type': 'application/json'
        });
        return this.http.post(this.aluURL, body, { headers: headers }).map(function (res) {
            //console.log(res.json());
            return res.json();
        });
    };
    AlumnosService.prototype.editarAlumno = function (alumno, key$) {
        var body = JSON.stringify(alumno);
        var headers = new http_1.Headers({
            'Content-Type': 'application/json'
        });
        var url = "" + this.editURL + key$ + ".json";
        //console.log(url);
        return this.http.put(url, body, { headers: headers }).map(function (res) {
            return res.json();
        });
    };
    AlumnosService.prototype.getAlumno = function (key$) {
        var url = this.editURL + "/" + key$ + ".json";
        var headers = new http_1.Headers({
            'Content-Type': 'application/json'
        });
        return this.http.get(url, { headers: headers }).map(function (res) { return res.json(); });
    };
    AlumnosService.prototype.getAlumnos = function () {
        var headers = new http_1.Headers({
            'Content-Type': 'application/json'
        });
        return this.http.get(this.aluURL, { headers: headers }).map(function (res) { return res.json(); });
    };
    AlumnosService.prototype.deleteAlumno = function (key$) {
        var url = this.editURL + "/" + key$ + ".json";
        return this.http.delete(url)
            .map(function (res) { return res.json(); });
    };
    return AlumnosService;
}());
AlumnosService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], AlumnosService);
exports.AlumnosService = AlumnosService;
//# sourceMappingURL=alumnos.service.js.map