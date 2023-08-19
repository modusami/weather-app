function SearchBar({ location, setLocation }) {
	return (
		<>
			<div id="searchBar" className="container">
				<div className="row">
					<div className="col-2 text-center">
						<span className="text-center">
							<i className="fa-solid fa-search"></i>
						</span>
					</div>
					<div className="col">
						<input
							type="text"
							placeholder="Enter a country..."
							value={location}
							onChange={(e) => setLocation(e.target.value)}
						/>
					</div>
				</div>
			</div>
		</>
	);
}

export default SearchBar;
