import api from "../../../infrastructure/api";
import { useQueryMenu } from "./useQueryMenu";
import { renderHook, waitFor } from "@testing-library/react";
import { QueryClient, QueryClientProvider } from "react-query";

describe("useQueryMenu", () => {
	jest.mock("../../../infrastructure/api");
	it("should call api when get method is called", async () => {
		const queryClient = new QueryClient();
		const wrapper = ({ children }: any) => (
			<QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
		);

		jest.spyOn(api, "get").mockImplementation(
			() =>
				new Promise((resolve) => {
					resolve("menu");
				})
		);

		const { result } = renderHook(() => useQueryMenu(), { wrapper });

		await waitFor(() => expect(result.current.data).toBe("menu"));
	});
});
