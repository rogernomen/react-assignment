"use strict";
exports.__esModule = true;
var controllers_1 = require("./controllers");
var constants_1 = require("./constants/constants");
var express = require('express');
var cors = require('cors');
var app = express();
var PORT = constants_1["default"].PORT;
app.use(cors({
    origin: '*'
}));
(0, controllers_1["default"])(app);
app.listen(PORT, function () {
    console.log("My HTTP server listening on port ".concat(PORT, "..."));
});
