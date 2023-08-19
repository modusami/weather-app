function SearchBar({ location, handleChange, onSearchButton, showDropDown }) {
	return (
		<>
			<div id="searchBar" className="container">
				<div className="row g-0">
					<div className="col-1 text-center">
						<span
							id="searchIconSpan"
							className="text-center d-block"
							onClick={onSearchButton}
						>
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
								<p>
									Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias,
									harum?
								</p>
								<p>
									Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias,
									harum?
								</p>
								<p>
									Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias,
									harum?
								</p>
								<p>
									Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias,
									harum?
								</p>
								<p>
									Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias,
									harum?
								</p>
								<p>
									Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias,
									harum?
								</p>
								<p>
									Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias,
									harum?
								</p>
								<p>
									Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias,
									harum?
								</p>
							</div>
						)}
					</div>
				</div>
			</div>
		</>
	);
}

export default SearchBar;
