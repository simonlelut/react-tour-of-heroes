import React, { Component } from 'react';
import { Switch, Route } from 'react-router'
import {BrowserRouter as Router, Link} from 'react-router-dom'
import './App.css';

//Components
import Dashboard from '../dashboard/dashboard'
import Messages from '../messages/Messages'
import Heroes from '../heroes/Heroes';
import HeroDetail from '../hero-detail/HeroDetail';


class App extends Component {
  title = 'React - Tour of Heroes';

  render() {
    return (
       <Router>
        <div>
          <h1>{this.title}</h1>    
          <nav>
            <Link to="/dashboard">Dashboard</Link> | <Link to="/heroes">Heroes</Link>
          </nav>

          <Switch>
            <Route exact path="/" component={Dashboard}/>
            <Route path="/heroes" component={Heroes}/>
            <Route path="/dashboard" component={Dashboard}/>
            <Route path="/detail/:id" component={HeroDetail}/>
            <Route component={Dashboard}/>
          </Switch>

          <Messages></Messages>
        </div>
      </Router>

    );
  }
}

export default App;
