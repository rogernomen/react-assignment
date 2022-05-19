import data from "../data/mock-data";
import menuService from "../services";

const controller = (app: any) => {
	app.get("/menu", (req: any, res: any) => {
		res.send(menuService.normalizeResponse(data));
	});
};

export default controller;
