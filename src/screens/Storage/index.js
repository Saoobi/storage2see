import React, { Component } from "react";
import styled from "styled-components";

import Input from "../../components/Input";
import Logo_twitch from "../../img/twitch.png";
import Logo_youtube from "../../img/youtube.png";
import SaveIcon from "../../assets/save.svg";
import { getStorage } from "../../API";

const ContainerMain = styled.div`
  height: 100%;
  display: flex;
  flex: 1;
  background: ${props =>
    props.theme === "twitch"
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

const ButtonSubmit = styled.button`
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
class Storage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categorie: this.props.match.params.chaine,
      urlToStore: ""
    };
  }

  handleInputChange = event => {
    this.setState({
      urlToStore: event.target.value
    });
  };

  handleFormSubmit = () => {
    const { categorie, urlToStore } = this.state;

    getStorage(categorie, urlToStore).then(data => {
      console.log(data);
    });
  };

  render() {
    const inputProps = {
      name: "urlToStore",
      onChange: this.handleInputChange,
      placeholder:
        this.state.categorie === "twitch"
          ? "https://www.twitch.tv/videos/513632035"
          : "https://www.youtube.com/watch?v=Cj3AV92fJ90",
      value: this.state.urlToStore
    };
    return (
      <ContainerMain theme={this.state.categorie}>
        <ContainerContent>
          <Img
            src={this.state.categorie === "twitch" ? Logo_twitch : Logo_youtube}
          />
          <ContainerForm>
            <Input {...inputProps} />
            <ButtonSubmit type="submit" onClick={this.handleFormSubmit}>
              <Icon src={SaveIcon} />
            </ButtonSubmit>
          </ContainerForm>
        </ContainerContent>
      </ContainerMain>
    );
  }
}

export default Storage;
