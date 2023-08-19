import { useState } from "react";
import SearchBar from "./SearchBar";
import WeatherApp from "./WeatherApp";

function App() {
	const [location, setLocation] = useState("");

	return (
		<>
			<div id="weatherDiv">
				<div id="searchBarWrapper">
					<SearchBar location={location} setLocation={setLocation} />
				</div>
				<div id="weatherWrapper">
					<WeatherApp />
				</div>
			</div>
		</>
	);
}

export default App;
