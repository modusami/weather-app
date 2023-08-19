import { useEffect, useState } from "react";
import SearchBar from "./SearchBar";
import WeatherApp from "./WeatherApp";

// all images to use
import cloudy from "./assets/cloudy.svg";
import lighting from "./assets/lightning.svg";
import rain from "./assets/rain.svg";
import snowing from "./assets/snowing.svg";
import sunny from "./assets/sunny.svg";

function App() {
	const [location, setLocation] = useState("");
	const [activeLocation, setActiveLocation] = useState("");
	const [scaleF, setScale] = useState(true); // true meaning fahrenheit
	const [temp, setTemp] = useState("0.0");
	const weeatherImages = [cloudy, lighting, rain, snowing, sunny];
	const [activeWeatherImg, setActiveWeatherImg] = useState(0);
	const [searchDropdown, setShowSearchDropdown] = useState(false);
	const cities = [
		"New York City, USA",
		"London, UK",
		"Tokyo, Japan",
		"Paris, France",
		"Sydney, Australia",
		"Beijing, China",
		"Rio de Janeiro, Brazil",
		"Cairo, Egypt",
		"Moscow, Russia",
		"Toronto, Canada",
		"Mumbai, India",
		"Berlin, Germany",
		"Rome, Italy",
		"Cape Town, South Africa",
		"Patna, India",
		"Kochi, India",
	];
	const [filteredResults, setFilteredResults] = useState([]);

	function handleOnChangeSearch(e) {
		const input = e.target.value;
		setLocation(input);

		const filtered = cities.filter((result) =>
			result.toLowerCase().includes(input.toLowerCase())
		);

		setFilteredResults(filtered);
	}

	const handleOnClickSearchButton = (e) => {
		setActiveLocation(location);
	};

	useEffect(() => {
		location === "" ? setShowSearchDropdown(false) : setShowSearchDropdown(true);
	}, [location]);

	return (
		<>
			<div id="weatherDiv">
				<div id="searchBarWrapper">
					<SearchBar
						location={location}
						handleChange={handleOnChangeSearch}
						onSearchButton={handleOnClickSearchButton}
						showDropDown={searchDropdown}
						filteredResults={filteredResults}
					/>
				</div>
				<div id="weatherWrapper">
					<WeatherApp
						location={activeLocation}
						scaleF={scaleF}
						temp={temp}
						img={weeatherImages[activeWeatherImg]}
					/>
				</div>
			</div>
		</>
	);
}

export default App;
