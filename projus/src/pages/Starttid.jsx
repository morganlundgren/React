import React, { useState } from "react";
import { Link } from "react-router-dom";
import { generateTimeSlots } from "../utils/generateTimeSlots";

function Starttid({ initialDate, onTimeSlotSelect }) {
  
  const [selectedDate, setSelectedDate] = useState(initialDate || "");
  const [timeSlots, setTimeSlots] = useState([]);

  
  const handleDateChange = (event) => {
    const newDate = event.target.value;
    setSelectedDate(newDate);
    setTimeSlots(generateTimeSlots(newDate)); 
  };

  return (
    <div>
      {/* Navigationsmeny */}
      <div className="mobile-menu">
        <Link to="#">Klubben <span className="arrow">▼</span></Link>
        <Link to="#">Gäster <span className="arrow">▼</span></Link>
        <Link to="/medlemskap">Medlemskap <span className="arrow">▼</span></Link>
        <Link to="/historia">Historia <span className="arrow">▼</span></Link>
      </div>

      {/* Bakgrundsbild */}
      <section className="starttid-picture">
        <img src="../src/img/img/pexels-huzaimi-ismail-839741383-30679405.jpg" alt="Bakgrundsbild" />
        <div className="picture-text">
          <h1>Boka starttid</h1>
        </div>
      </section>

      <div className="starttid-spacer"></div>

      {/* Kalender och tidsval */}
      <section className="calendar-section">
        <div className="container">
          <h1>Boka starttid</h1>
          <h2>Välj ett datum</h2>
          <input
            type="date"
            id="datePicker"
            value={selectedDate}
            onChange={handleDateChange}
          />

          <h3>Lediga tider:</h3>
          <div className="times">
            {timeSlots.length > 0 &&
              timeSlots.map((time, index) => (
                <div
                  key={index}
                  className="time-slot"
                  onClick={() => onTimeSlotSelect ? onTimeSlotSelect(time) : alert(`Du valde ${time}`)}
                >
                  {time}
                </div>
              ))}
          </div>
        </div>

        {/* Bokningsinformation */}
        <div className="container bokning-inf">
          <h2>Greenfeeavgifter 2025</h2>
          <p>
            Senior: 250 kr <br />
            Junior upp till 21 år: 100 kr <br />
            Ungdom upp till 13 år spelar gratis.
          </p>

          <h2>Greenfeeöverenskommelse inom NVGF:</h2>
          <p>
            Lapland Resort (före detta Björklidens GK) <br />
            Kiruna GK <br />
            Gällivare-Malmbergets GK <br />
            Arvidsjaurs GK <br />
            Lycksele GK <br />
            Haparanda-Torneå GK <br />
            Kalix GK <br />
          </p>

          <h2>Greenfee vid överenskommelse</h2>
          <p>
            Senior: 160:- <br />
            Junior 17 år – 21 år: 80:- <br />
            Ungdom upp till 16 år spelar gratis.
          </p>
        </div>
      </section>
    </div>
  );
}

export default Starttid;
