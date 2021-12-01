import './App.css';
import React from 'react';
import Home from './components/Home/home';
import Nav from './components/NavBar/Nav';
import About from './About';
import { Redirect, Route, Switch } from 'react-router';
import DashBoard from './components/Doctors/DashBoard/DashBoard';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <React.Fragment>
      <Nav />
      <main className="container-margin">
        <Switch>
          <Route path="/home" component={Home} />
          <Route path="/dashBoard/:id" component={DashBoard} />
          <Redirect to="/home" />
        </Switch>
      </main>
      <Footer />
    </React.Fragment>
  );
}

export default App;
