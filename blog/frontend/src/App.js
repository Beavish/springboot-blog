import React, { Component } from 'react';
import './App.css';
import { Route, BrowserRouter as Router,Switch} from 'react-router-dom'
import Blog from './Blog';
import Home from './Home';
import CV from './Cv';


class App extends Component {
  render() {
    return (
     

      <Router>
      <Switch>
           <Route path='/' exact={true} component={Home}/>
           <Route path='/Blog' exact={true} component={Blog}/>
           <Route path='/Cv' exact={true} component={CV}/>
      </Switch>
   </Router>
   
    );
  }
}

export default App;
