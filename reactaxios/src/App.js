import React, {Component} from 'react';
import axios from "axios"
import './App.css';
import UserForm from "./components/UserForm"

//https://api.github.com/users/john
class App extends Component {

  state = {
    repos: null
  }

  getUser = (e) => {
    e.preventDefault();
    const user = e.target.elements.username.value;
    if(user){
      axios.get(`https://api.github.com/users/${user}`)
      .then((res) => {
        const repos = res.data.public_repos;
        this.setState({ repos});
      })
    }else{
      return;
    }
    console.log(user);
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
        <h1 className="App-title">Chamada HTTP no React</h1>
        <UserForm getUser={this.getUser}/>
      </header>
      {this.state.repos ? <p>Number of repos: {this.state.repos}</p> :
      <p>Please enter an username</p> }
      </div>
    );
  }
}

export default App;
