import { useEffect, useState } from "react";
import SearchBar from "./SearchBar";
import WeatherApp from "./WeatherApp";
import { cities } from "./data/cities";

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
	const data = cities;
	const [filteredResults, setFilteredResults] = useState([]);

	function handleOnChangeSearch(e) {
		const input = e.target.value;
		setLocation(input);

		const filtered = Object.keys(data).reduce((accumulator, countryCode) => {
			const countryCities = data[countryCode];
			const filteredCountryCities = countryCities.filter((city) =>
				city.toLowerCase().includes(input.toLowerCase())
			);
			return accumulator.concat(filteredCountryCities);
		}, []);

		setFilteredResults(filtered);
	}

	function findKeyByValue(obj, value) {
		for (const key in obj) {
			const arr = obj[key];
			if (arr.includes(value)) {
				return key;
			}
		}

		return null;
	}

	function getGeocodes(city = "") {
		const arrCity = city.split(",");
		const newCity = arrCity[0]; // name of city
		const cc = findKeyByValue(data, city);

		const URL = `http://api.openweathermap.org/geo/1.0/direct?q=${newCity},,${cc}&limit=1&appid=7b91f0ba2b2ff6f044a5d5825e2e0dd7`;

		return URL;
	}

	const handleOnClickSearchButton = (e) => {
		const text = e.target.innerText;
		setLocation("");
		setActiveLocation(text);
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
				<p>
					<a href={getGeocodes(activeLocation)} target="__blank">
						click
					</a>
				</p>
			</div>
		</>
	);
}

export default App;
