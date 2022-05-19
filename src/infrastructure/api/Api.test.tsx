import api from "./Api";
import MockAdapter from "axios-mock-adapter";
import axios from "axios";

describe("the Api File", () => {
	const mock = new MockAdapter(axios, { onNoMatch: "throwException" });

	it("should get data when get method is called", async () => {
		mock.onGet(`${process.env.REACT_APP_API_URL}/url`).reply(200, "result");
		const result = await api.get("url");

		expect(result).toBe("result");
	});

	it("should return plain respone when http status is 204", async () => {
		mock.onGet(`${process.env.REACT_APP_API_URL}/url`).reply(204, "result");

		const result: any = await api.get("url");

		expect(result.status).toBe(204);
	});
});
