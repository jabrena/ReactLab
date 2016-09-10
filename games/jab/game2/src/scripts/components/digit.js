"use strict";

const React = require("react");
const ReactDOM = require("react-dom");

let Digit = React.createClass({
    render: function () {
        return (
            <span className={this.props.number}></span>
        );
    }
});

module.exports = Digit;