import React from 'react';
import { hydrate } from 'react-dom';

import App from './components/App/App.jsx';

hydrate(<App pathname={location.pathname} />, document.getElementById("app"));
