"use strict";

$ = jQuery = require('jquery');
const React = require("react");
const ReactDOM = require("react-dom");
const WebFont = require('webfontloader');
 
// WebFont.load({
//     custom: {
//         families: ['Conv_NewGardiner','FontAwesome']
//     },
//     active: renderView
// });

let EgyptianNumber = require('./components/egyptianNumber');
let ValidateNumber = require('./components/validateNumber');

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function renderView(){

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
            <div>
                <EgyptianNumber number={randomNumber} />
                <ValidateNumber number={randomNumber}/>
            </div>,
            $(numbersView)[0]
        );
    }

}
renderView();

window.React = React; 


