import React from "react";

class Carousel extends React.Component{

	render(){
		return(
			
			<div className="carousel-container">
			<h1>Våra samarbetspartners</h1>
			<div className="carousel">
			  {[
				"../src/img/img/Med_stod_fran_Allmanna_Arvsfonden_farg_positiv-624x151.png",
				"../src/img/img/nedladdning(1).jpg",
				"../src/img/img/nedladdning.jpg",
				"../src/img/img/nedladdning.png",
				"../src/img/img/teamsportia.png",
				"../src/img/img/Med_stod_fran_Allmanna_Arvsfonden_farg_positiv-624x151.png",
				"../src/img/img/nedladdning(1).jpg",
				"../src/img/img/nedladdning.jpg",
				"../src/img/img/nedladdning.png",
				"../src/img/img/teamsportia.png",
				"../src/img/img/Med_stod_fran_Allmanna_Arvsfonden_farg_positiv-624x151.png",
				"../src/img/img/nedladdning(1).jpg",
				"../src/img/img/nedladdning.jpg",
				"../src/img/img/nedladdning.png",
				"../src/img/img/teamsportia.png",
			  ].map((src, index) => (
				<img key={index} src={src} alt="logga på företag" />
			  ))}
			</div>
		  </div>


		)
	}
}
export default Carousel;
