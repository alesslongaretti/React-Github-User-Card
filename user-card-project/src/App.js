import React from 'react';
import axios from "axios";
// import MyCard from "./components/MyCard";

// import './App.css';

class App extends React.Component {

  state = {
    user: [],

  };

  componentDidMount() {
    axios
    .get('https://api.github.com/users/alesslongaretti')
    .then(ale => {
      console.log('axios:ale', ale);
      this.setState({ ...this.state, user: ale.data})
    })
    .catch (err => console.log("error on axios", err))
  }




render() {
  return (
    <div className="App">
    

    </div>
  );
}}

export default App;
