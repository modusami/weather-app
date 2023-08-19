import { useState } from "react";
import SearchBar from "./SearchBar";

function App() {
	const [location, setLocation] = useState("");

	return (
		<>
			<div id="weatherApp">
				<div id="searchBarWrapper">
					<SearchBar location={location} setLocation={setLocation} />
				</div>
				<div id="weatherWrapper"></div>
			</div>
		</>
	);
}

export default App;
