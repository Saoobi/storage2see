import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import Logo_twitch from "../../img/twitch.png";
import Logo_yt from "../../img/youtube.png";

const ContainerMain = styled.div`
  height: 100%;
  display: flex;
  flex-direction: row;
  flex: 1;
  background: linear-gradient(125deg, #f0f0ff 50%, #282828 50%);
`;

const ContainerTwitch = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
`;

const ContainerYoutube = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
`;

const ImgTwitch = styled.img`
  width: 200px;
`;

const ImgYoutube = styled.img`
  width: 250px;
`;

function Home() {
  return (
    <ContainerMain>
      <ContainerTwitch>
        <Link to="/storage/twitch">
          <ImgTwitch src={Logo_twitch} />
        </Link>
      </ContainerTwitch>
      <ContainerYoutube>
        <Link to="/storage/youtube">
          <ImgYoutube src={Logo_yt} />
        </Link>
      </ContainerYoutube>
    </ContainerMain>
  );
}

export default Home;
