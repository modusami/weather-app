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

	function handleOnChangeSearch(e) {
		setLocation(e.target.value);
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
