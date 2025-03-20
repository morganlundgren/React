import React from "react";
import { Link } from "react-router";

class Header extends React.Component {
  render() {
    return (
      <header>
        <nav>
          <div className="navcontrol">
            <Link to="/Starttid" className="green">Boka Starttid</Link>
            <Link to="/Kontakt">Kontakta oss</Link>
            <Link to="#">Sök</Link>
          </div>

          <div className="navcontainer">
            <div className="logocontainer">
              <img height="70" width="70" src="../src/img/img/rundlogga.png" alt="Bild på logga" />
              <h1>
				<Link to ="/"> Porjus Golfklubb </Link>
				
			</h1>
            </div>

            <div className="menu-icon">☰</div>

            <div className="navtext">
              <Link to="#">Klubben <span className="arrow">▼</span></Link>
              <Link to="#">Gäster <span className="arrow">▼</span></Link>
              <Link to="/Medlemskap">Medlemskap <span className="arrow">▼</span></Link>
              <Link to="/Historia">Historia <span className="arrow">▼</span></Link>
            </div>
          </div>
        </nav>
      </header>
    );
  }
}

export default Header;
