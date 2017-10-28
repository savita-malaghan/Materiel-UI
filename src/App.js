import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Button from 'material-ui/Button';
import AppBar from 'material-ui/AppBar';
import { withStyles } from 'material-ui/styles';
import ButtonBase from 'material-ui/ButtonBase';
import Typography from 'material-ui/Typography';
import Login from './Login'

class App extends Component {
    constructor(){
        super();
        this.state = {clickedButton: false};
        this.openForm = this.openForm.bind(this);
    }
    openForm(){
        console.log("button clicked from is going to open......")
        this.setState({clickedButton: true});
    }
  render() {
    return (
      <div className="App">
          <AppBar position="static">

                  <Button color="contrast">Login</Button>
          </AppBar>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
              <Button raised color="primary"
                       onClick={this.openForm}>
                  Button
              </Button>
           <Login openState={this.state.clickedButton}/>
      </div>
    );
  }
}

export default App;
