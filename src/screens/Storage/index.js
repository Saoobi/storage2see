import React, { Component } from "react";
import styled from "styled-components";

import Input from "../../components/Input";
import Logo_twitch from "../../img/twitch.png";
import Logo_youtube from "../../img/youtube.png";
import SaveIcon from "../../assets/save.svg";
import Video from "../../components/Video";
import { storeLink, getLinkByCategory } from "../../API";

const ContainerMain = styled.div`
  display: flex;
  flex: 1;
  background: ${props =>
    props.theme === "twitch"
      ? "linear-gradient(130deg, #f0f0ff 95%, #282828 5%)"
      : "linear-gradient(130deg, #282828 95%, #f0f0ff 5%)"};
  background-attachment: fixed;
  flex-direction: column;
  padding: 20px;
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

const ContainerStorage = styled.div`
  display: flex;
  flex: 1;
  flex-wrap: wrap;
  justify-content: center;
`;

class Storage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      category: this.props.match.params.chaine,
      urlToStore: "",
      storage: []
    };
  }

  componentDidMount() {
    const { category } = this.state;

    getLinkByCategory(category).then(data => {
      this.setState({
        storage: [...this.state.storage, ...data]
      });
    });
  }

  handleInputChange = event => {
    this.setState({
      urlToStore: event.target.value
    });
  };

  splitUrl(url) {
    if (this.state.category === "youtube") {
      return url.split("v=")[1].substring(0, 11);
    } else {
      return url.split("videos/")[1];
    }
  }

  handleFormSubmit = () => {
    const { category, urlToStore } = this.state;

    const urlID = this.splitUrl(urlToStore);

    storeLink(category, urlID).then(data => {
      this.setState({
        urlToStore: "",
        storage: [...this.state.storage, data]
      });
    });
  };

  _displayStorage() {
    const storage = this.state.storage;
    //Lorsque aucun résultat n'a été trouvé
    if (!storage.length) {
      return (
        <div>
          <p>Storage vide</p>
        </div>
      );
    }
    //Lorsque des données ont été récupérée
    if (storage && storage.length) {
      return (
        <ContainerStorage>
          {storage.map(item => (
            <Video
              key={item._id}
              category={this.state.category}
              id={item._id}
              title="none"
              urlID={item.urlToStore}
            />
          ))}
        </ContainerStorage>
      );
    }
  }

  render() {
    const inputProps = {
      name: "urlToStore",
      onChange: this.handleInputChange,
      placeholder:
        this.state.category === "twitch"
          ? "https://www.twitch.tv/videos/513632035"
          : "https://www.youtube.com/watch?v=Cj3AV92fJ90",
      value: this.state.urlToStore
    };
    return (
      <ContainerMain theme={this.state.category}>
        <ContainerContent>
          <Img
            src={this.state.category === "twitch" ? Logo_twitch : Logo_youtube}
          />
          <ContainerForm>
            <Input {...inputProps} />
            <ButtonSubmit type="submit" onClick={this.handleFormSubmit}>
              <Icon src={SaveIcon} />
            </ButtonSubmit>
          </ContainerForm>
        </ContainerContent>
        {this._displayStorage()}
      </ContainerMain>
    );
  }
}

export default Storage;
