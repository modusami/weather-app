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

function findKeyByValue(obj, value) {
	for (const key in obj) {
		const arr = obj[key];
		if (arr.includes(value)) {
			return key;
		}
	}

	return null;
}

async function getGeocodes(city) {
	const arrCity = city.split(",");
	const newCity = arrCity[0]; // name of city
	const cc = findKeyByValue(cities, city);

	if (cc === null) {
		alert(`${city} not found in the cities object`);
		return null;
	}

	const URL = `http://api.openweathermap.org/geo/1.0/direct?q=${newCity},,${cc}&limit=1&appid=7b91f0ba2b2ff6f044a5d5825e2e0dd7`;

	try {
		const response = await fetch(URL);
		const responseData = await response.json();
		// lat and long
		if (responseData.length > 0) {
			// lat and long
			return [{ lat: responseData[0]["lat"], long: responseData[0]["lon"] }];
		} else {
			return null;
		}
	} catch (err) {
		return null;
	}
}

function App() {
	const [location, setLocation] = useState("");
	const [activeLocation, setActiveLocation] = useState("");
	const [scaleF, setScale] = useState(true); // true meaning fahrenheit
	const [temp, setTemp] = useState("0.0");
	const weeatherImages = {
		Clouds: cloudy,
		Rain: rain,
		Snow: snowing,
		Thunderstorm: lighting,
		Clear: sunny,
	};
	const [activeWeatherImg, setActiveWeatherImg] = useState("Clouds");
	const [searchDropdown, setShowSearchDropdown] = useState(false);
	const data = cities;
	const [filteredResults, setFilteredResults] = useState([]);

	async function getWeather() {
		const coords = await getGeocodes(activeLocation);

		if (coords === null) return null;

		const LAT = coords[0]["lat"];
		const LONG = coords[0]["long"];

		const URL = `https://api.openweathermap.org/data/2.5/weather?lat=${LAT}&lon=${LONG}&units=imperial&&appid=7b91f0ba2b2ff6f044a5d5825e2e0dd7`;

		try {
			const response = await fetch(URL);
			const responseData = await response.json();
			const tempF = responseData["main"]["temp"];
			const weather = responseData["weather"][0]["main"];
			return { temp: tempF, imgWeather: weather };
		} catch (err) {
			console.log(err);
			return null;
		}
	}

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

	const handleOnClickSearchButton = (e) => {
		const text = e.target.innerText;
		setLocation("");
		setActiveLocation(text);
	};

	useEffect(() => {
		location === "" ? setShowSearchDropdown(false) : setShowSearchDropdown(true);
	}, [location]);

	useEffect(() => {
		if (activeLocation !== "") {
			getWeather().then((value) => {
				if (value === null && activeLocation !== "") {
					alert("City Not Found");
				} else {
					setTemp(value.temp);
					setActiveWeatherImg(value.imgWeather);
				}
			});
		}
	}, [activeLocation]);

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
