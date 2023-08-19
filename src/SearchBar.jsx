function SearchBar({ location, handleChange, onSearchButton, showDropDown, filteredResults }) {
	return (
		<>
			<div id="searchBar" className="container">
				<div className="row g-0">
					<div className="col-1 text-center">
						<span id="searchIconSpan" className="text-center d-block">
							<i className="fa-solid fa-search"></i>
						</span>
					</div>
					<div id="searchBarInput" className="col-10">
						<input
							type="text"
							placeholder="Enter a city..."
							value={location}
							className="form-control w-100"
							onChange={handleChange}
						/>
						{showDropDown && (
							<div id="searchDropDown">
								{filteredResults.map((result, index) => {
									return (
										<p onClick={onSearchButton} key={index}>
											{result}
										</p>
									);
								})}
							</div>
						)}
					</div>
				</div>
			</div>
		</>
	);
}

export default SearchBar;
