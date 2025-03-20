import React from 'react';

function Banguide() {
  return (
    <div>
      <div className="ban-spacer"></div>

      <div className="banprofil">
        <h1>Banprofil</h1>
        <img id="bana" src="../src/img//img/Banprofil2.jpg" height="1000" width="500" alt="banguide" />
      </div>

      <div id="draggable"></div>

      <div className="dropable">
        <img src="../src/img//img/golfhole.png" alt="golfhole" />
        <div id="dropzone"></div>
      </div>
    </div>
  );
}

export default Banguide;
