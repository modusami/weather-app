function SearchBar({ location, setLocation }) {
	return (
		<>
			<div id="searchBar" className="container">
				<div className="row g-0">
					<div className="col-1 text-center">
						<span id="searchIconSpan" className="text-center d-block">
							<i className="fa-solid fa-search"></i>
						</span>
					</div>
					<div className="col-10">
						<input
							type="text"
							placeholder="Enter a country..."
							value={location}
							className="form-control w-100"
							onChange={(e) => setLocation(e.target.value)}
						/>
					</div>
				</div>
			</div>
		</>
	);
}

export default SearchBar;
