import React from "react";
import { Link } from "react-router";

class Home extends React.Component {
	render() {
	  return (
		<main>
		  <div className="mobile-menu">
			<Link to="#">Klubben <span className="arrow">▼</span></Link>
			<Link to="../html/gäster.html">Gäster <span className="arrow">▼</span></Link>
			<Link to="../html/medlemskap.html">Medlemskap <span className="arrow">▼</span></Link>
			<Link to="../html/historia.html">Historia <span className="arrow">▼</span></Link>
		  </div>
  
		  <section className="video-container">
			<video className="background-video" autoPlay muted loop>
			  <source src="../src/img/img/6573613-hd_1920_1080_30fps.mp4" type="video/mp4" />
			</video>
			<div className="video-overlay"></div>
			<div className="video-text">
			  <h1>En oförglömlig golfupplevelse</h1>
			  <p>Välkommen till Porjus Golfklubb</p>
			</div>
		  </section>
  
		  <div className="spacer"></div>
  
		  <section className="golf-section">
			<div className="golf-container">
			  <div className="golf-item">
				<img src="../src/img/img/golfgubbe.png" className="golf-icon" alt="Ikon av en golfspelare" />
				<h2>Boka starttid</h2>
				<Link to="/Starttid">Se lediga tider och boka →</Link>
			  </div>
			  <div className="golf-item">
				<img src="../src/img/img/golfsymbol.png" className="golf-icon" alt="Ikon på en krans" />
				<h2>Tävlingskalender</h2>
				<Link to="/Tavling">Se tävlingskalendern →</Link>
			  </div>
			</div>
  
			<div className="golf-highlight">
			  <div className="golf-highlight-text">
				<h2>Börja spela golf</h2>
				<p>Ta grönt kort hos oss</p>
				<p>Anmäl dig redan idag till en grönt kort kurs hos oss. Efter avslutad kurs får du fritt spel på banan hela säsongen!</p>
				<button className="golf-button">Läs mer</button>
			  </div>
			  <div className="golf-highlight-image">
				<img src="../src/img/img/pexels-thomasleeward-2828723.jpg" alt="Golfboll nära hålet" />
			  </div>
			</div>
		  </section>
  
		</main>
	  );
	}
  }
  
  export default Home;