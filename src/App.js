import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import List from './components/list';

function App() {
  return (<Router>
    <div className="App">
 
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <Switch>
              <Route path="/list" component={List} />
            </Switch>
          </div>
        </div>
      </div>
    </div>
  </Router>
  );
}

export default App;


