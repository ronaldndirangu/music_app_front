import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Home from './containers/Home';
import Artists from './containers/Artists';
import Albums from './containers/Albums';
import Songs from './containers/Songs';

function App() {
  return (
    <div>
        <div>
          <Navbar />
        </div>
        <Switch>
          <Route exact path='/' component={Home}></Route>
          <Route exact path='/artists' component={Artists}></Route>
          <Route exact path='/albums' component={Albums}></Route>
          <Route exact path='/songs' component={Songs}></Route>
        </Switch>
      </div>
  );
}

export default App;
