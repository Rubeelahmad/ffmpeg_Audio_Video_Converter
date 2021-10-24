import React from 'react';
import './App.css';
import { HashRouter, Switch, Route } from 'react-router-dom';
import Layout from './views/container/layout';
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    <div>
      <HashRouter>
        <React.Suspense fallback={"loading..."}>
          <Switch>
            <Route path="/" name="Home" render={Layout} />
          </Switch>
        </React.Suspense>
      </HashRouter>
    </div>
  );
}

export default App;
