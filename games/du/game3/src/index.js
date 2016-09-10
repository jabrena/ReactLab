import React from 'react';
import ReactDOM from 'react-dom';
import HomePage from './containers/home/HomePage';

const App = () => (
  <HomePage/>
);
 
ReactDOM.render(
  <App />,
  document.getElementById('app')
);