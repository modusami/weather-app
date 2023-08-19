function SearchBar({ location, handleChange, onSearchButton, showDropDown, filteredResults }) {
	return (
		<>
			<div id="searchBar" className="container-fluid">
				<div className="row g-0">
					<div className="col-2 d-flex justify-content-end">
						<span id="searchIconSpan" className="">
							<i className="fa-solid fa-search"></i>
						</span>
					</div>
					<div id="searchBarInput" className="col-9">
						<input
							type="text"
							placeholder="Enter a city..."
							value={location}
							className=" w-100"
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
