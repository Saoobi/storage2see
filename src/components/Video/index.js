import React from "react";
import styled from "styled-components";

const ContainerVideo = styled.div`
  display: flex;
  margin: 15px;
`;

function Video({ category, id, title, urlID }) {
  const url =
    category === "youtube"
      ? `http://www.youtube.com/embed/${urlID}`
      : `https://player.twitch.tv/?video=${urlID}&autoplay=false`;
  return (
    <ContainerVideo>
      <iframe
        id={id}
        src={url}
        title={title}
        height="180"
        width="320"
        scrolling="no"
        allowFullScreen={true}
      />
    </ContainerVideo>
  );
}

export default Video;
