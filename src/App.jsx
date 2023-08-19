import { useState } from "react";
import SearchBar from "./SearchBar";
import WeatherApp from "./WeatherApp";

function App() {
	const [location, setLocation] = useState("");
	const [scaleF, setScale] = useState(true); // true meaning fahrenheit
	const [temp, setTemp] = useState("0.0");

	return (
		<>
			<div id="weatherDiv">
				<div id="searchBarWrapper">
					<SearchBar location={location} setLocation={setLocation} />
				</div>
				<div id="weatherWrapper">
					<WeatherApp location={location} scaleF={scaleF} temp={temp} />
				</div>
			</div>
		</>
	);
}

export default App;
