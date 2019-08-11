import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) 
  {
    super(props);
  }
  
    
    goTo(route) {
      this.props.history.replace(`/${route}`)
    }
    login() {
      this.props.auth.login();
    }
  
    logout() {
      this.props.auth.logout();
    }
  
  
    render() {
     return(
      <div className="container">
      <div className="navbar">
        
      </div>
    
      
      </div>
      );
    }
}

export default App;
