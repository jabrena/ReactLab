"use strict";

$ = jQuery = require('jquery');
const React = require("react");
const ReactDOM = require("react-dom");

let EgyptianNumber = require('./components/egyptianNumber');

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

const indexView = "#game-index";
const numbersView = "#game-numbers";

if($(indexView).length != 0) {

    setInterval(function() {
        const min = 1;
        const max = 199999;
        const randomNumber = getRandomInt(min, max);
        ReactDOM.render(
            <EgyptianNumber number={randomNumber} />,
            $(indexView)[0]
        );
    }, 500);

}

if($(numbersView).length != 0) {
    const min = 1;
    const max = 199999;
    const randomNumber = getRandomInt(min, max);
    ReactDOM.render(
        <EgyptianNumber number={randomNumber} />,
        $(numbersView)[0]
    );
}
