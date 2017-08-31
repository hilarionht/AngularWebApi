"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var platform_browser_1 = require("@angular/platform-browser");
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms"); //SE AÑADIO REACTIVEFORM... PAR QUE FUNCIONE DATA
var http_1 = require("@angular/http");
var app_routes_1 = require("./app.routes");
var alumnos_service_1 = require("./services/alumnos.service");
var equipos_service_1 = require("./services/equipos.service");
var helloworld_component_1 = require("./helloworld.component");
var home_component_1 = require("./components/home/home.component");
var navbar_component_1 = require("./components/navbar/navbar.component");
var alumnos_component_1 = require("./components/alumnos/alumnos.component");
var alumno_component_1 = require("./components/alumnos/alumno.component");
var equipos_component_1 = require("./components/equipos/equipos.component");
var keys_pipe_1 = require("./pipes/keys.pipe");
var app_component_1 = require("./app.component");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [
            platform_browser_1.BrowserModule,
            forms_1.FormsModule,
            forms_1.ReactiveFormsModule,
            http_1.HttpModule,
            app_routes_1.APP_ROUTING
        ],
        declarations: [
            helloworld_component_1.HelloWorldComponent,
            home_component_1.HomeComponent,
            app_component_1.AppComponent,
            navbar_component_1.NavbarComponent,
            alumnos_component_1.AlumnosComponent,
            alumno_component_1.AlumnoComponent,
            equipos_component_1.EquiposComponent,
            keys_pipe_1.KeysPipe
        ],
        providers: [
            alumnos_service_1.AlumnosService,
            equipos_service_1.EquiposService
        ],
        bootstrap: [app_component_1.AppComponent]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map