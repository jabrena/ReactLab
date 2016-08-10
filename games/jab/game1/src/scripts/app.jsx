const React = require("react");
const ReactDOM = require("react-dom");

let Figure = React.createClass({
    render: function () {
        return (
            <span className={this.props.number}></span>
        );
    }
});

let EgyptianNumbers = React.createClass({
    render: function () {
        return (
            <div className="cssIcon">
                {(() => {
                    //TODO Improve this syntax. A bit weird.
                    switch (this.props.number) {
                        case 1:  return <Figure number="one" />
                        case 2:  return <Figure number="two" />
                        case 3:  return <Figure number="three" />
                        case 4:  return <Figure number="four" />
                        case 5:  return <Figure number="five" />
                        case 6:  return <Figure number="six" />
                        case 7:  return <Figure number="seven" />
                        case 8:  return <Figure number="eight" />
                        case 9:  return <Figure number="nine" />
                        case 10:  return <Figure number="ten" />                                         
                        default: return "Runtime Exception";
                    }
                })()}
            </div>
        );
    }
});

let counter = 0;
setInterval(function() {
    if(counter === 10){ counter = 0; }
    counter++;
    ReactDOM.render(
        <EgyptianNumbers number={counter} />,
        document.getElementById('game')
    );
}, 1000);