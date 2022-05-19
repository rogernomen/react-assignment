"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mock_data_1 = __importDefault(require("../data/mock-data"));
const services_1 = __importDefault(require("../services"));
const controller = (app) => {
    app.get("/menu", (req, res) => {
        res.send(services_1.default.normalizeResponse(mock_data_1.default));
    });
};
exports.default = controller;
