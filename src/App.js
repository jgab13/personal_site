import React from 'react';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import Home from './react-components/Home';
import './App.css';
import ProjectPage from './react-components/ProjectPage'

class App extends React.Component {

              
              
  render (){
    return (
      <BrowserRouter>
            <Switch>
              <Route exact path='/personal_site' render={(props) => 
                              (<Home appState={this.state} {...props}/>)}/>
              <Route exact path='/ProjectPage/:projectname' render={(props) => 
                              (<ProjectPage appState={this.state} {...props}/>)}/>
              <Route render={() => <div>404 Not found!</div>}/>

            </Switch>
      </BrowserRouter>
    );
    
  }
  
}

export default App;
