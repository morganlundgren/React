import React from "react";
import { Link } from "react-router";

class Kontakt extends React.Component {
  render() {
    return (
      <>
        <div className="content"></div>

        <div className="mobile-menu">
          <Link to="#">Klubben <span className="arrow">▼</span></Link>
          <Link to="/Gäster">Gäster <span className="arrow">▼</span></Link>
          <Link to="/Medlemskap">Medlemskap <span className="arrow">▼</span></Link>
          <Link to="/Historia">Historia <span className="arrow">▼</span></Link>
        </div>

        <section className="kontakt-picture">
          <img src="../src/img/img/pexels-markusspiske-97768.jpg" alt="Kontakt" />
          <div className="picture-text">
            <h1>Kontakta oss</h1>
          </div>
        </section>

        <div className="kontakt-spacer"></div>

        <div className="kontakt-container">
          <div className="box">
            <h2>Adress</h2>
            <p>Hantverkargatan 39C <br /> 962 33 Jokkmokk</p>
          </div>
          <div className="box">
            <h2>Kontaktuppgifter</h2>
            <p>Email: info@porjusgk.com <br /> Ordförande: Roland Andersson <br /> Telefon: 070-395 44 05</p>
          </div>
          <div className="box">
            <h2>Öppettider</h2>
            <p>
              Måndag - Fredag: 09:00 - 18:00 <br />
              Lördag: 10:00 - 16:00 <br />
              Söndag: Stängt
            </p>
          </div>
          <div className="box">
            <h2>Karta</h2>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5136.601599040852!2d19.8185452!3d66.6072805!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x45d7b72ada32065f%3A0x3d30302d59a3d3f0!2sPorjusv%C3%A4gen%203%2C%20962%2032%20Jokkmokk!5e0!3m2!1sen!2sse!4v1707589722334"
              width="600"
              height="450"
              style={{ border: "0" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </>
    );
  }
}

export default Kontakt;
