import React, { Fragment } from 'react';
import { Route, Switch } from 'react-router-dom';
import '../src/sass/main.scss';
import Home from '../src/pages/Home';
import About from '../src/pages/About';
import Contact from '../src/pages/Contact';

const App = () => {
  return (
    <Fragment>
      <Switch>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Fragment>
  );
};

export default App;
