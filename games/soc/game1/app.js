'use strict';

//var React = require('react');
//var ReactDOM = require('react-dom');

var HelloWorld = React.createClass({
    displayName: 'HelloWorld',


    getInitialState: function getInitialState() {
        return { hello: 'Hello World - with this.state' };
    },
    render: function render() {
        return React.createElement(
            'h1',
            null,
            this.state.hello
        );
    }
});

ReactDOM.render(React.createElement(HelloWorld, null), document.getElementById('app'));
//# sourceMappingURL=app.js.map
