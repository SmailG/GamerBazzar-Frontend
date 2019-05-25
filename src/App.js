import React, { Component } from 'react';
import './App.css';
import { Provider } from 'react-redux';
import store from './store/store';
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import MainContainer from './containers/MainContainer.jsx';

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={ props =>
      localStorage.getItem("token") ? (
        <Component {...props} />
      ) : (
          <Redirect
            to={{
              pathname: "/",
              state: { from: props.location }
            }}
          />
        )
    }
  />
);

const PublicRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={ props =>
       (
        <Component {...props} />
      ) 
    }
  />
);

class App extends Component {
  render() {
    return (
		<Provider store={store}>
      <Router>
        <React.Fragment>
          <PublicRoute path="/" component={MainContainer} />
        </React.Fragment>
      </Router>
		</Provider>
    );
  }
}

export default App;
