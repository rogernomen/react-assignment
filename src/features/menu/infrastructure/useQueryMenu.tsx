import { useQuery, UseQueryResult } from "react-query";
import { Menu } from "../../../../bff/dist/models/Menu";
import api from "../../../infrastructure/api";

export const useQueryMenu = (): UseQueryResult<Menu, Error> => {
	return useQuery<Menu, Error>(
		["fetch-menu"],
		() => {
			return api.get("menu");
		},
		{ keepPreviousData: true }
	);
};
