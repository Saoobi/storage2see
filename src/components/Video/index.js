import React from "react";
import styled from "styled-components";

import DeleteIcon from "../../assets/trash.svg";

const ContainerVideo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  margin: 15px;
`;

const ButtonDelete = styled.button`
  background-color: #eaeaea;
  padding: 10px;
  margin: 0;
  border: none;
  border-radius: 0px 0px 4px 4px;
  cursor: pointer;

  &:hover {
    background-color: #bdbdbd;
  }
`;

const Icon = styled.img`
  width: 18px;
`;

function Video({ category, handleDelete, id, title, urlID }) {
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
      <ButtonDelete type="submit" onClick={() => handleDelete(id)}>
        <Icon src={DeleteIcon} />
      </ButtonDelete>
    </ContainerVideo>
  );
}

export default Video;
