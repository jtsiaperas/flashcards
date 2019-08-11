import React from 'react';
import { Route, Router } from 'react-router-dom';
import App from './App';
import history from './history';
import FlashCards from './components/flashcards';
import Admin from './components/admin';

export const makeMainRoutes = () => {
  
  return (
    <Router history={history} component={App}>
      <div>
       
        <Route path="/" render={(props) => <App {...props} />} />
        <Route exact path="/admin" render={(props) => {
              
              return (
                
                  <div id="admin">
                    <Admin {...props}/>
                  </div>
               
              )
            } 
          
          }/>
          <Route exact path="/flashcards" render ={(props)=>{
            
            
              return (
                <div id="flashcards">
                <FlashCards {...props} />
                </div>
              )
          }} />
  
      </div>
    </Router>
  );
}