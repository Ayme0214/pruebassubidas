"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MensajesWsModule = void 0;
const common_1 = require("@nestjs/common");
const mensajes_ws_service_1 = require("./mensajes-ws.service");
const mensajes_ws_gateway_1 = require("./mensajes-ws.gateway");
const paciente_module_1 = require("../paciente/paciente.module");
let MensajesWsModule = class MensajesWsModule {
};
MensajesWsModule = __decorate([
    (0, common_1.Module)({
        providers: [mensajes_ws_gateway_1.MensajesWsGateway, mensajes_ws_service_1.MensajesWsService],
        imports: [paciente_module_1.PacienteModule]
    })
], MensajesWsModule);
exports.MensajesWsModule = MensajesWsModule;
//# sourceMappingURL=mensajes-ws.module.js.map