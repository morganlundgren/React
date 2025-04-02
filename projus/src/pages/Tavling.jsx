import React from "react";
import { Link } from "react-router-dom";




class Tavling extends React.Component {
	handleAnmalan(tavling) {
		alert(`Du har anmält dig till ${tavling}!`);
	}
    
    render() {
        return (
            <div>
                <div className="mobile-menu">
                    <Link to="#">Klubben <span className="arrow">▼</span></Link>
                    <Link to="/gäster">Gäster <span className="arrow">▼</span></Link>
                    <Link to="/medlemskap">Medlemskap <span className="arrow">▼</span></Link>
                    <Link to="/historia">Historia <span className="arrow">▼</span></Link>
                </div>

                <section className="tävling-picture">
                    <img src="../src/img/img/pexels-picjumbo-com-55570-196650.jpg" alt="bakgrundsbild" />
                    <div className="picture-text">
                        <h1>Tävlingskalender</h1>
                    </div>
                </section>

                <div className="tävling-spacer"></div>

                <div className="table-container">
                    <div className="tävling-text">
                        <h1>Tävlingskalender</h1>
                    </div>
                    <table>
                        <thead>
                            <tr>
                                <th>Datum</th>
                                <th>Tävling</th>
                                <th>Plats</th>
                                <th>Anmälan</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>2025-06-15</td>
                                <td>Sommarcupen</td>
                                <td>Porjus GK</td>
                                <td>
                                    <button onClick={() => this.handleAnmalan("Sommarcupen")}>Anmäl dig</button>
                                </td>
                            </tr>
                            <tr>
                                <td>2025-07-10</td>
                                <td>Midnattsslaget</td>
                                <td>Porjus GK</td>
                                <td>
                                    <button onClick={() => this.handleAnmalan("Midnattsslaget")}>Anmäl dig</button>
                                </td>
                            </tr>
                            <tr>
                                <td>2025-08-22</td>
                                <td>Höstmästerskapet</td>
                                <td>Porjus GK</td>
                                <td>
                                    <button onClick={() => this.handleAnmalan("Höstmästerskapet")}>Anmäl dig</button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

export default Tavling;
