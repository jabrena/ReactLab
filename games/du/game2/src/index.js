import injectTapEventPlugin from 'react-tap-event-plugin';

injectTapEventPlugin();

import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import LogonPage from './containers/LogonPage';

require('./styles/common.css');
require('../node_modules/toastr/build/toastr.min.css');
 
const App = () => (
  <MuiThemeProvider>
    <LogonPage />
  </MuiThemeProvider>
);
 
ReactDOM.render(
  <App />,
  document.getElementById('app')
);