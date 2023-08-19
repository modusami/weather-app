function WeatherApp({ img, temp = "0.0", scaleF, location }) {
	return (
		<>
			<div id="weatherApp" className="container border">
				<div className="row">
					<div className="col-12 text-center">
						<h2>{location ? location : "Waiting..."}</h2>
					</div>
				</div>
				<div className="row">
					<div className="col-12">
						<span className="temp">{temp ? temp : "0.0"}</span>{" "}
						<span className="scale">{scaleF ? "F" : "C"}</span>
					</div>
				</div>
				<div className="row">
					<div className="col-12">
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
			</div>
		</>
	);
}

export default WeatherApp;
