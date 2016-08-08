import React from "react";
import ReactDOM from "react-dom";

var MyCanvas = React.createClass({
    render: function () {
        return (
            <canvas className="res">
            M23*[sep=0.5](X1:N35)-insert[t](G39,Z1)-N12[rotate=180]-F31*[sep=0.5]S29
            </canvas>
        );
    }
});

var MySpan = React.createClass({
    render: function () {
        return (
            <span className="sign">mSa</span>
        );
    }
});

var MultipleObjects = React.createClass({
    render: function () {
        return (
            <div>
                <MyCanvas />
            </div>
        );
    }
});

ReactDOM.render(
    <MultipleObjects />,
    document.getElementById('game'), 
    () => {
        ResWeb.init();
    }    
);
