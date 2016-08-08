import React from "react";
import ReactDOM from "react-dom";

var Counter = React.createClass({
    getInitialState: function () {
        return { count: 0 };
    },
    render: function () {
        return (
            <canvas className="res">
            M23*[sep=0.5](X1:N35)-insert[t](G39,Z1)-N12[rotate=180]-F31*[sep=0.5]S29
            </canvas>
        );
    }
});

ReactDOM.render(
    <Counter />,
    document.getElementById('game'), 
    () => {
        ResWeb.init();
    }    
);
