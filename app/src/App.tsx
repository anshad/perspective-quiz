import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.scss';
import Home from './components/Home';
import Result from './components/Result';

function App(props: any) {
  return (
    <Router>
      <div className='app'>
        <Switch>
          <Route path='/result/:id'>
            <Result />
          </Route>
          <Route path='/'>
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
