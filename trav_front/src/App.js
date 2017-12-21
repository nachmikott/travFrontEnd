

import React from 'react';
import logo from './logo.png';
//import './App.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import Paper from 'material-ui/Paper';


const paper_style = {
  textAlign: 'center',
  display: 'inline-block',
};

const submit_style = {
  margin: 15,
};


class LoginPage extends React.Component {
  render() {
    return (
      <div>
        <MuiThemeProvider>
          <div>
            <AppBar
            title="Trav"
            />
            <Paper zDepth={1}>
              <EnterCredentialsAndSubmit />
            </Paper>
          </div> 
        </MuiThemeProvider>
      </div>
    );
  }
}

class EnterCredentialsAndSubmit extends React.Component {
   render() {
      return (
        <div>
          <TextField
            hintText="Enter your Username"
            floatingLabelText="Username"
          />
          <br/>
          <TextField
          type="password"
          hintText="Enter your Password"
          floatingLabelText="Password"
          />
          <br/>
          <RaisedButton label="Submit" primary={true} style={submit_style}/>
        </div>
      );
   }
}

export default App;
