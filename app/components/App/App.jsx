import React, {Component} from 'react';

import Home from '../pages/Home/Home.jsx';
import About from '../pages/About/About.jsx';

import history from '../../utils/lib/history.js';

// import constants from ../../utils/constants

if(process.env.WEBPACK) {
  require('./app.scss');
}

const PAGES = {
  '/': Home,
  '/about': About
}

// Acts as a router for both the server & client
// Gets req.url from server, location.pathname from client
export default class App extends Component {
  constructor (props) {
    super(props);

    this.state = {
      pathname: props.pathname
    }
  }

  componentDidMount() {
    console.info('App loaded in:' + Math.round(performance.now()));

    history.onChange((pathname) => {
      this.setState({pathname});
    });
  }


  render () {

    var Handler = PAGES[this.state.pathname] || Home;

    return <Handler />;
  }
}