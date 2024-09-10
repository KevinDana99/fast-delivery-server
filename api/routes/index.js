"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const location_1 = __importDefault(require("./v1/location"));
const Api = (server) => {
    server.use("/api/v1", location_1.default);
};
exports.default = Api;
