
import React from "react";
import { Link } from "react-router";

class Medlemskap extends React.Component {
  render() {
    return (
      <div>
        <div className="content"></div>
		
		<div className="mobile-menu">
          <Link to="#">Klubben <span className="arrow">▼</span></Link>
          <Link to="#">Gäster <span className="arrow">▼</span></Link>
          <Link to="/Medlemskap">Medlemskap <span className="arrow">▼</span></Link>
          <Link to="/Historia">Historia <span className="arrow">▼</span></Link>
        </div>

        <section className="Medlem-picture">
          <img src="../src/img/img/pexels-jopwell-1325681.jpg" alt="Medlemskap" />
          <div className="picture-text">
            <h1>Medlemskap</h1>
          </div>
        </section>

        <div className="spacer"></div>

        <section className="membership-section">
          <div className="membership-content">
            <div className="membership-text">
              <h2>Bli medlem hos oss!</h2>
              <p>
                Välkommen till en av norra Sveriges häftigaste golfklubbar som ligger i anslutning till Porjus
                kraftstation. Golfbanan ligger mitt inne i kraftstationsområdet med dammar, intag, utskov och
                ställverk i omedelbar anslutning till utslag och greener.
              </p>
            </div>

            <div className="membership-form">
              <h3>Medlem</h3>
              <form>
                <label>Jag vill registrera</label><br />
                <input type="radio" name="age" value="adult" /> Vuxen (18 år eller äldre) <br />
                <input type="radio" name="age" value="youth" /> Underårig (17 år eller yngre) <br /><br />

                <label>Har du Golf-ID?</label><br />
                <input type="radio" name="golfid" value="yes" /> Ja <br />
                <input type="radio" name="golfid" value="no" /> Nej <br /><br />

                <label>Personnummer</label>
                <input type="text" name="personnummer" placeholder="ÅÅÅÅMMDD-XXXX" /><br />

                <div className="form-row">
                  <div>
                    <label>Förnamn</label>
                    <input type="text" name="firstname" placeholder="Förnamn" />
                  </div>
                  <div>
                    <label>Efternamn</label>
                    <input type="text" name="lastname" placeholder="Efternamn" />
                  </div>
                </div>

                <div className="form-row">
                  <div>
                    <label>Gatuadress</label>
                    <input type="text" name="address" placeholder="Gatuadress" />
                  </div>
                </div>

                <div className="form-row">
                  <div>
                    <label>Postnummer</label>
                    <input type="text" name="postcode" placeholder="Postnummer" />
                  </div>
                  <div>
                    <label>Postort</label>
                    <input type="text" name="city" placeholder="Postort" />
                  </div>
                </div>

                <div className="form-row">
                  <div>
                    <label>Telefon</label>
                    <input type="text" name="phone" placeholder="Telefon" />
                  </div>
                  <div>
                    <label>E-post</label>
                    <input type="email" name="email" placeholder="E-post" />
                  </div>
                </div>

                <button type="submit">Skicka</button>
              </form>
            </div>
          </div>

          {/* Högerkolumn: Bilder */}
          <div className="membership-picture">
            <img src="../src/img//img/Porjus-GK-4.jpg" alt="Golfbana" />
            <img src="../src/img/img/cropped-Green-8-.png" alt="Kraftstation" />
          </div>
        </section>

      </div>
    );
  }
}

export default Medlemskap;
