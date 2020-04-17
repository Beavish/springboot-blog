import React, { Component } from 'react';
import './App.css';
import { Route, BrowserRouter as Router,Switch} from 'react-router-dom'
import Blog from './Blog';
import Home from './Home';
import CV from './Cv';
import Upload from './Upload'
import NewPost from './NewPost'


class App extends Component {
  render() {
    return (
     

      <Router>
      <Switch>
           <Route path='/' exact={true} component={Home}/>
           <Route path='/Blog' exact={true} component={Blog}/>
           <Route path='/Cv' exact={true} component={CV}/>
           <Route path='/Upload' exact={true} component={Upload}/>
           <Route path='/NewPost' exact={true} component={NewPost}/>

      </Switch>
   </Router>
   
    );
  }
}

export default App;
