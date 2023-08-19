function WeatherApp({ img, temp, scaleF, location }) {
	return (
		<>
			<div id="weatherApp" className="container border">
				<div className="row">
					<div className="col-12 text-center fs-3">
						<span className="temp">{temp ? temp : "0"}</span>{" "}
						<span className="scale">{scaleF ? "F" : "C"}</span>
					</div>
				</div>
				<div className="row">
					<div className="col-12 text-center">
						<img
							id="weatherImage"
							src={
								img
									? img
									: "https://png.pngtree.com/png-vector/20210221/ourmid/pngtree-error-404-not-found-glitch-effect-png-image_2928215.jpg"
							}
							alt=""
							className="img-fluid"
						/>
					</div>
				</div>
				<div className="row">
					<div className="col-12 d-flex align-items-end justify-content-center">
						<h2>{location ? location : "Waiting..."}</h2>
					</div>
				</div>
			</div>
		</>
	);
}

export default WeatherApp;
