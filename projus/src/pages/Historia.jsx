import React from "react";
import { Link } from "react-router";

class Historia extends React.Component {
  render() {
    return (
      <div>
       

        <section className="historia-picture">
          <img src="../src/img/img/pexels-cottonbro-6256836.jpg" alt="historia" />
          <div className="picture-text">
            <h1>Historia</h1>
          </div>
        </section>

        <section className="timeline">
          <div className="timeline-container">

            <div className="timeline-event">
              <div className="timeline-content">
                <h3>1989 – Klubben bildas</h3>
                <p>Tre bröder gick runt bland stubbar och stenar. De såg potential för en golfbana. Klubben grundades den 1 juli 1989.</p>
              </div>
            </div>

            <div className="timeline-event">
              <div className="timeline-content">
                <h3>1991 – Första hålen klara</h3>
                <p>Den 7 juli var fyra hål färdiga. Lesslie Stuart från Luleå GK slog första utslaget.</p>
              </div>
            </div>

            <div className="timeline-event">
              <div className="timeline-content">
                <h3>1993 – 9-hålsbanan invigs</h3>
                <p>Den 15 augusti invigdes den 9-hålsbana vi spelar på idag.</p>
              </div>
            </div>

            <div className="timeline-event">
              <div className="timeline-content">
                <h3>2001 – Rangen i Jokkmokk invigs</h3>
                <p>Den 18 augusti invigdes driving rangen i Jokkmokk.</p>
              </div>
            </div>

            <div className="timeline-event">
              <div className="timeline-content">
                <h3>2005 – Robert Karlsson besöker klubben</h3>
                <p>Den 20 augusti höll Robert Karlsson en golfclinic på klubben.</p>
              </div>
            </div>

            <div className="timeline-event">
              <div className="timeline-content">
                <h3>2007 – Nya greener</h3>
                <p>Den 4 mars beslutades att anlägga nya greener. De första sex greenerna blev klara 14 juni.</p>
              </div>
            </div>

            <div className="timeline-event">
              <div className="timeline-content">
                <h3>2008 – Nya hålet invigs</h3>
                <p>Robert Karlsson slog invigningsslaget för det nya hålet den 8 juli.</p>
              </div>
            </div>

            <div className="timeline-event">
              <div className="timeline-content">
                <h3>2010 – Till minne av Alf Wallbing</h3>
                <p>Vår ordförande Alf Wallbing gick bort den 3 november. En stor förlust för klubben.</p>
              </div>
            </div>

            <div className="timeline-event">
              <div className="timeline-content">
                <h3>2011 – Nytt banrekord</h3>
                <p>Den 2 juli sattes nya banrekord av Robert Karlsson (69 slag) och Michaela Bordeianu (79 slag).</p>
              </div>
            </div>

            <div className="timeline-event">
              <div className="timeline-content">
                <h3>2024 – Banrekord tangeras</h3>
                <p>Hemmaplan spelaren Albin Helin tangerade banrekordet vid klubb-mästerskapet.</p>
              </div>
            </div>

          </div>
        </section>
      </div>
    );
  }
}

export default Historia;

