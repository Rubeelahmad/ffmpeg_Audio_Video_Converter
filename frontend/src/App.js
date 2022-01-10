import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Layout from './views/container/layout';
import 'bootstrap/dist/css/bootstrap.min.css'
import { createBrowserHistory } from "history";
import { BrowserRouter } from "react-router-dom";

function App() {

  const hist = createBrowserHistory();

  //window.location.hash = '';
  return (
    <div>
     <BrowserRouter history={hist}>
        <React.Suspense fallback={"loading..."}>
          <Switch>
            <Route path="/*" name="Home" render={Layout} />
          </Switch>
        </React.Suspense>
      </BrowserRouter>
    </div>
  );
}

export default App;
