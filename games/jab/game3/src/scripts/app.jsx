"use strict";

$ = jQuery = require('jquery');
const React = require("react");
const ReactDOM = require("react-dom");
const WebFont = require('webfontloader');
import { Router, Route, hashHistory } from 'react-router'
import App from './modules/App'
import About from './modules/About'
import Home from './modules/Home'
import Numbers from './modules/Numbers'

// WebFont.load({
//     custom: {
//         families: ['Conv_NewGardiner','FontAwesome']
//     },
//     active: renderView
// });

ReactDOM.render((
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <Route path="/home" component={Home}/>
      <Route path="/numbers" component={Numbers}/>
      <Route path="/about" component={About}/>
    </Route>
  </Router>
), $("#app")[0])
