import React from "react";
import "./App.css";
import MenuPage from "./features/menu";
import { QueryClient, QueryClientProvider } from "react-query";

function App(): React.ReactElement {
	const queryClient = new QueryClient({
		defaultOptions: {
			queries: {
				refetchOnWindowFocus: false
			}
		}
	});

	return (
		<QueryClientProvider client={queryClient}>
			<div className="App">
				<MenuPage />
			</div>
		</QueryClientProvider>
	);
}

export default App;
