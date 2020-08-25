import React from 'react';
import { BrowserRouter as Router, Route, Switch }  from 'react-router-dom';
import routes from './config/routes';

function App() {
  return (
    <Router>
      <Switch>
        {routes.map((r, index) => (
          <RouteWithSubRoutes key={index} {...r} />
        ))}
      </Switch>
    </Router>
  );
}

function RouteWithSubRoutes(r) {
  return (
    <Route 
      path={r.path} 
      exact={r.exact} 
      render={props => <r.component routes={r.routes} {...props} />} 
    />
  );
}

export default App;