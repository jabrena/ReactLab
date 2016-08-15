import React from 'react';
import {render} from 'react-dom';
import HelloWorld from './components/HelloWorld'

class App extends React.Component {
  render () {
    return <div> <HelloWorld/> </div>;
  }
}

render(<App/>, document.getElementById('app'));