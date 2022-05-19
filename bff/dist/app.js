"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const controllers_1 = __importDefault(require("./controllers"));
const constants_1 = __importDefault(require("./constants/constants"));
const express = require('express');
const cors = require('cors');
const app = express();
const PORT = constants_1.default.PORT;
app.use(cors({
    origin: '*'
}));
(0, controllers_1.default)(app);
app.listen(PORT, () => {
    console.log(`My HTTP server listening on port ${PORT}...`);
});
