import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import RocketDetails from './pages/RocketDetails';
import Error404 from './pages/Error404';
import './styles/styles.css';

const App = () => (
  <Router>
    <Header />
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/:id" component={RocketDetails} />
      <Route component={Error404} />
    </Switch>
  </Router>
);

export default App;



