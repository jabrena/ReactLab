const React = require("react");
const ReactDOM = require("react-dom");

var Figure = React.createClass({
    render: function () {
        return (
            <span className={this.props.number}></span>
        );
    }
});

var EgyptianNumbers = React.createClass({
    render: function () {
        return (
            <div className="cssIcon">
                <Figure number="one" />
                <Figure number="two" />
                <Figure number="three" />
                <Figure number="four" />
                <Figure number="five" />
                <Figure number="six" />
                <Figure number="seven" />
                <Figure number="eight" />
                <Figure number="nine" />
                <Figure number="ten" />
            </div>
        );
    }
});

ReactDOM.render(
    <EgyptianNumbers />,
    document.getElementById('game')
);
