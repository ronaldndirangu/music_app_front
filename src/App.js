import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.scss';
import Navbar from './components/Navbar';
import Home from './containers/Home/Home';
import Artists from './containers/Artists/Artists';
import Albums from './containers/Albums/Albums';
import Songs from './containers/Songs/Songs';
import Sidebar from './components/Sidebar';

function App() {
  return (
    <div>
        <div>
          <Navbar />
        </div>
        <div className="container">
          <div className="side">
            <Sidebar />
          </div>
          <div className="content">
            <Switch>
              <Route exact path='/' component={Home}></Route>
              <Route exact path='/artists' component={Artists}></Route>
              <Route exact path='/albums' component={Albums}></Route>
              <Route exact path='/songs' component={Songs}></Route>
            </Switch>
          </div>
        </div>
      </div>
  );
}

export default App;
