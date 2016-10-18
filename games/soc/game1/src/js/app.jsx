
var React = require('react');
var ReactDOM = require('react-dom');

var HelloWorld = React.createClass({

	getInitialState: function(){
		return { hellos: 'Hello World - with this.state'}
	},
    render: function () {
        return (
            <h1>{this.state.hellos}</h1>
        );
    }
});

ReactDOM.render(
    <HelloWorld />,
    document.getElementById('app')
);