import React from "react";
import axios from "axios";
import MyCard from "./components/MyCard";
import FollowersCard from "./components/FollowersCard";
import styled from "styled-components";
import "./App.css";

const WrapperDiv = styled.div`
  background-color: #f78fb3;
`;

const FollowersDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
`;

const Title = styled.h2`
  font-size: 2rem;
  color: white;
  margin: 50px 0px;
`;

class App extends React.Component {
  state = {
    user: [],
    userFollowers: []
  };

  componentDidMount() {
    axios
      .get("https://api.github.com/users/alesslongaretti")
      .then(response => {
        console.log("axios:ale", response);
        this.setState({ ...this.state, user: response.data });
      })
      .catch(err => console.log("error on axios", err));

    axios
      .get("https://api.github.com/users/alesslongaretti/followers")
      .then(res => {
        console.log(res);
        this.setState({ ...this.state, userFollowers: res.data });
      })
      .catch(err => console.log("error on axios", err));
  }

  render() {
    return (
      <WrapperDiv className="App">
        <div>
          <MyCard
            name={this.state.user.name}
            avatar_url={this.state.user.avatar_url}
            login={this.state.user.login}
            url={this.state.user.url}
            followers={this.state.user.followers}
          />
        </div>
        <Title>Followers</Title>
        <FollowersDiv>
          {this.state.userFollowers.map(followers => (
            <FollowersCard
              login={followers.login}
              avatar_url={followers.avatar_url}
              url={followers.url}
            />
          ))}
        </FollowersDiv>
      </WrapperDiv>
    );
  }
}

export default App;
