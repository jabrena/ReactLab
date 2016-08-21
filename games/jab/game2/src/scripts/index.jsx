"use strict";

const React = require("react");
const ReactDOM = require("react-dom");

let EgyptianNumber = require('./components/egyptianNumber');

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

setInterval(function() {
    const min = 1;
    const max = 199999;
    const randomNumber = getRandomInt(min, max);
    ReactDOM.render(
        <EgyptianNumber number={randomNumber} />,
        $('#game')[0]
    );
}, 500);