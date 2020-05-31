import React, { Component } from 'react';
import './App.css';
import { Route, BrowserRouter as Router,Switch} from 'react-router-dom'
import Blog from './Blog';
import Home from './Home';
import CV from './Cv';
import show from './show'
import Admin from './Admin';
import PostManager from './PostManager';


class App extends Component {
  render() {
    return (
     

      <Router>
      <Switch>
           <Route path='/' exact={true} component={Home}/>
           <Route path='/Blog' exact={true} component={Blog}/>
           <Route path='/Cv' exact={true} component={CV}/>
           <Route path='/Admin' exact={true} component={Admin}/>
           <Route path='/PostManager' exact={true} component={PostManager}/>
           <Route path="/show/:id" component={show}></Route>

      </Switch>
   </Router>
   
    );
  }
}

export default App;
