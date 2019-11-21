import React from "react";

import styles from "./styles.css";

import Logo_twitch from "../../img/twitch.png";
import Logo_yt from "../../img/youtube.png";
function Home() {
  return (
    <div className="container_main">
      <div className="position_content container_twitch">
        <div className="logo_background">
          <img className="img_twitch" src={Logo_twitch} />
        </div>
      </div>
      <div className="position_content container_youtube">
        <div className="logo_background">
          <img className="img_yt" src={Logo_yt} />
        </div>
      </div>
    </div>
  );
}

export default Home;
