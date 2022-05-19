"use strict";
exports.__esModule = true;
var mock_data_1 = require("../data/mock-data");
var services_1 = require("../services");
var controller = function (app) {
    app.get('/menu', function (req, res) {
        console.log("llega");
        res.send(services_1["default"].normalizeResponse(mock_data_1["default"]));
    });
};
exports["default"] = controller;
