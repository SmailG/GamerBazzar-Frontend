import React, { Component } from 'react';
import './App.css';
import { Provider } from 'react-redux';
import store from './store/store';
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import MainContainer from './containers/MainContainer.jsx';
import MenuContainer from './containers/MenuBarContainer.jsx';
import FooterContainer from './containers/FooterContainer';
import { setWindowWidth } from './actions/uiActions';
import AuthContainer from './containers/AuthContainer/AuthContainer';

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

  resizeHandler = (e) => {
    console.log(e);
    store.dispatch(setWindowWidth(document.body.clientWidth));
  }

  componentDidMount = () => {
    window.addEventListener('resize', (e) => this.resizeHandler(e));
  }

  componentWillUnmount = () => {
    window.removeEventListener('resize', (e) => this.resizeHandler(e));
  }

  render() {
    return (
		<Provider store={store}>
      <Router>
        <React.Fragment>
          <PublicRoute path="/" component={MenuContainer} />
          <PublicRoute path="/" component={MainContainer} />
          <PublicRoute path="/" component={FooterContainer} />
          <PublicRoute path="/login" component={AuthContainer} />
        </React.Fragment>
      </Router>
		</Provider>
    );
  }
}

export default App;
