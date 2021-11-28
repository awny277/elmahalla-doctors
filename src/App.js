import './App.css';
import React from 'react';
import Home from './components/Home/home';
import Nav from './components/NavBar/Nav';
import About from './About';
import { Redirect, Route, Switch } from 'react-router';

function App() {
  return (
    <React.Fragment>
      <Nav />
      <main className="container-margin">
        <Switch>
          <Route path="/home" component={Home} />
          <Route path="/about" component={About} />
          <Redirect to="/home" />
        </Switch>
      </main>
    </React.Fragment>
  );
}

export default App;
