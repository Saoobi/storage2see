import React from "react";
import styled from "styled-components";

import Logo_twitch from "../../img/twitch.png";
import Logo_youtube from "../../img/youtube.png";
import SaveIcon from "../../assets/save.svg";

function Storage({ match }) {
  const { chaine } = match.params;

  const ContainerMain = styled.div`
    height: 100%;
    display: flex;
    flex: 1;
    background: ${chaine == "twitch"
      ? "linear-gradient(130deg, #f0f0ff 95%, #282828 5%)"
      : "linear-gradient(130deg, #282828 95%, #f0f0ff 5%)"};
  `;

  const ContainerContent = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    flex: 1;
  `;

  const Img = styled.img`
    width: 200px;
  `;

  const ContainerForm = styled.div`
    display: flex;
    flex-direction: row;
  `;

  const InputUrl = styled.input`
    width: 100%;
    padding: 14px 20px;
    margin: 40px 0;
    border: none;
    border-radius: 4px 0px 0px 4px;
    cursor: pointer;
  `;

  const ButtonInput = styled.button`
    background-color: #eaeaea;
    padding: 10px 20px;
    margin: 40px 0;
    border: none;
    border-radius: 0px 4px 4px 0px;
    cursor: pointer;

    &:hover {
      background-color: #bdbdbd;
    }
  `;

  const Icon = styled.img`
    width: 18px;
  `;

  return (
    <ContainerMain>
      <ContainerContent>
        <Img src={chaine == "twitch" ? Logo_twitch : Logo_youtube} />
        <ContainerForm>
          <InputUrl
            type="url"
            name="url"
            id="url"
            placeholder={
              chaine == "twitch"
                ? "https://www.twitch.tv/videos/513632035"
                : "https://www.youtube.com/watch?v=Cj3AV92fJ90"
            }
            pattern="https://.*"
            size="50"
            required
          />
          <ButtonInput type="submit">
            <Icon src={SaveIcon} />
          </ButtonInput>
        </ContainerForm>
      </ContainerContent>
    </ContainerMain>
  );
}

export default Storage;
