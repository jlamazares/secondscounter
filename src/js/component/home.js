import React from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";

export function SecondsCounter(props) {
	return (
		<div id="app">
			<div className="wholecounter">
				<div className="clockimage">
					<i className="far fa-clock" />
				</div>
				<div className="one">{props.digitone}</div>
				<div className="two">{props.digittwo}</div>
				<div className="three">{props.digitthree}</div>
				<div className="four">{props.digitfour}</div>
				<div className="five">{props.digitfive}</div>
				<div className="six">{props.digitsix}</div>
			</div>
		</div>
	);
}

SecondsCounter.propTypes = {
	digitone: PropTypes.number,
	digittwo: PropTypes.number,
	digitthree: PropTypes.number,
	digitfour: PropTypes.number,
	digitfive: PropTypes.number,
	digitsix: PropTypes.number
};

let digitcounter = 0;
setInterval(function() {
	const one = Math.floor((digitcounter / 100000) % 10);
	const two = Math.floor((digitcounter / 10000) % 10);
	const three = Math.floor((digitcounter / 1000) % 10);
	const four = Math.floor((digitcounter / 100) % 10);
	const five = Math.floor((digitcounter / 10) % 10);
	const six = Math.floor((digitcounter / 1) % 10);
	console.log(one, two, three, four, five, six);
	digitcounter++;
	ReactDOM.render(
		<SecondsCounter
			digitone={one}
			digittwo={two}
			digitthree={three}
			digitfour={four}
			digitfive={five}
			digitsix={six}
		/>,
		document.querySelector("#app")
	);
}, 1000);
//create your first component
