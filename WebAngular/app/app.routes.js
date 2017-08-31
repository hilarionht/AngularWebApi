"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var router_1 = require("@angular/router");
var home_component_1 = require("./components/home/home.component");
//import { PreciosComponent } from './components/precios/precios.component';
//import { PrivadoComponent } from './components/privado/privado.component';
//import { TemplateComponent } from './components/template/template.component';
//import { DataComponent } from './components/data/data.component';
var alumno_component_1 = require("./components/alumnos/alumno.component");
var alumnos_component_1 = require("./components/alumnos/alumnos.component");
var equipos_component_1 = require("./components/equipos/equipos.component");
//import { AuthGuardService } from './services/auth-guard.service';
var APP_ROUTES = [
    { path: 'home', component: home_component_1.HomeComponent },
    //{ path: 'precio', component: PreciosComponent },
    //{ path: 'privado', component: PrivadoComponent, canActivate: [ AuthGuardService] },
    //{ path: 'template', component: TemplateComponent },
    //{ path: 'data', component: DataComponent },
    { path: 'alumno/:id', component: alumno_component_1.AlumnoComponent },
    { path: 'alumnos', component: alumnos_component_1.AlumnosComponent },
    { path: 'equipos', component: equipos_component_1.EquiposComponent },
    { path: '**', pathMatch: 'full', redirectTo: 'home' }
];
exports.APP_ROUTING = router_1.RouterModule.forRoot(APP_ROUTES);
//# sourceMappingURL=app.routes.js.map