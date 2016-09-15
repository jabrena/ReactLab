'use strict';

//var React = require("react");
//var ReactDOM = require("react-dom");

var HelloWorld = React.createClass({
    displayName: 'HelloWorld',

    render: function render() {
        return React.createElement(
            'h1',
            null,
            'Hello World'
        );
    }
});

ReactDOM.render(React.createElement(HelloWorld, null), document.getElementById('app'));
//# sourceMappingURL=app.js.map
