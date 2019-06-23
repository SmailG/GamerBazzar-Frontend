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
import { ThemeProvider } from '@livechat/ui-kit'
import ChatContainer from './containers/ChatContainer/ChatContainer';
import AdminContainer from './containers/AdminContainer/AdminContainer';
import gbConf from './conf/conf';
import { initConf } from './actions';

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

    // init state
    store.dispatch(initConf(gbConf))

    window.addEventListener('resize', (e) => this.resizeHandler(e));
  }

  componentWillUnmount = () => {
    window.removeEventListener('resize', (e) => this.resizeHandler(e));
  }

  render() {
    return (
		<Provider store={store}>
    <ThemeProvider>
      <Router>
        <React.Fragment>
          <PublicRoute path="/" component={MenuContainer} />
          <PublicRoute exact path="/" component={MainContainer} />
          <PublicRoute path="/admin" component={AdminContainer} />
          <PublicRoute path="/" component={FooterContainer} />
          <PublicRoute path="/" component={ChatContainer} />
          <PublicRoute path="/(login|register)" component={AuthContainer} />
        </React.Fragment>
      </Router>
    </ThemeProvider>
		</Provider>
    );
  }
}

export default App;
