import React from "react";
import { Link } from "react-router";

class Footer extends React.Component {
  render() {
    return (
      <footer className="footer">
        <div className="footer-container">
          <div className="footer-section">
            <img height="100" width="100" src="../src/img/img/rundlogga.png" alt="Bild på logga" />
          </div>

          <div className="footer-section">
            <h4>Kontaktinformation</h4>
            <ul>
              <li>Porjus Golfklubb</li>
              <li>Hantverkargatan 39 C</li>
              <li>962 33 Jokkmokk</li>
              <li>070-395 44 05</li>
              <li>
                <Link to="mailto:info@porjusgk.com">info@porjusgk.com</Link>
              </li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Spela</h4>
            <ul>
              <li><Link to="/Starttid">Boka starttid</Link></li>
              <li><Link to="/Banguide">Banguide</Link></li>
              <li><Link to="#">Trivselregler</Link></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Medlemskap</h4>
            <ul>
              <li><Link to="#">Börja spela golf</Link></li>
              <li><Link to="/Medlemskap">Bli medlem</Link></li>
            </ul>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
