import React from 'react';
import axios from "axios";
import MyCard from "./components/MyCard";
import FollowersCard from "./components/FollowersCard"
import styled from "styled-components";
import './App.css';

const WrapperDiv = styled.div`
background-color: pink;
`;




class App extends React.Component {

  state = {
    user: [],
    userFollowers: []

  };

  componentDidMount() {
    axios
    .get('https://api.github.com/users/alesslongaretti')
    .then(response => {
      console.log('axios:ale', response);
      this.setState({ ...this.state, user: response.data})
    })
    .catch (err => console.log("error on axios", err))

    axios
    .get ('https://api.github.com/users/alesslongaretti/followers')
    .then(res => {
      console.log(res);
      this.setState({...this.state, userFollowers: res.data})
    })
    .catch(err => console.log("error on axios", err))
  }




render() {
  return (
    <WrapperDiv className="App">
      <div>
        <MyCard
        name= {this.state.user.name}
        avatar_url={this.state.user.avatar_url}
        login={this.state.user.login}
        url={this.state.user.url}
        followers={this.state.user.followers}
        />
      </div>
      {this.state.userFollowers.map(followers => (
      <FollowersCard
      login={followers.login}
      avatar_url={followers.avatar_url}
      url={followers.url}
      />
      ))}

      <div>

      </div>
    

    </WrapperDiv>
  );
}}

export default App;
