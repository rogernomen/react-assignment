import controller from "./controllers";
import CONSTANTS from "./constants/constants";
const express = require("express");
const cors = require("cors");

const app = express();
const PORT = CONSTANTS.PORT;

app.use(
	cors({
		origin: "*"
	})
);

controller(app);

app.listen(PORT, () => {
	console.log(`My HTTP server listening on port ${PORT}...`);
});
