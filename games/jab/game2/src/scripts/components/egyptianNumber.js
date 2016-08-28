"use strict";

const React = require("react");
const ReactDOM = require("react-dom");

let Digit = require('./digit');
let ValidateNumber = require('./validateNumber');

let EgyptianNumber = React.createClass({
    dynamicClass: function(digit, number){
        switch (digit) {
            case 1:  return "oneDigit_" + number;
            case 2:  return "twoDigit_" + number;
            case 3:  return "threeDigit_" + number;
            case 4:  return "fourDigit_" + number;
            case 5:  return "fifthDigit_" + number;
            case 6:  return "sixthDigit_" + number;
            case 7:  return "seventhDigit_" + number;
        }
    },    
    render: function () {
        return (
            <div className="cssIcon">

                {(() => {
                    //Seventh Digit
                    let numberLength = "" + this.props.number;
                    if(numberLength.length > 6){
                        let index = numberLength.charAt(numberLength.length - 7);
                        return <Digit number={this.dynamicClass(7,index)} />                            
                    }
                })()}

                {(() => {
                    //Separator
                    let numberLength = "" + this.props.number;
                    if(numberLength.length === 7) {
                        return <br />                            
                    }
                })()}

                {(() => {
                    //Sixth Digit
                    let numberLength = "" + this.props.number;
                    if(numberLength.length > 5){
                        let index = numberLength.charAt(numberLength.length - 6);
                        return <Digit number={this.dynamicClass(6,index)} />                            
                    }
                })()}

                {(() => {
                    //Fift Digit
                    let numberLength = "" + this.props.number;
                    if(numberLength.length > 4){
                        let index = numberLength.charAt(numberLength.length - 5);
                        return <Digit number={this.dynamicClass(5,index)} />                            
                    }
                })()}

                {(() => {
                    //Forth Digit
                    let numberLength = "" + this.props.number;
                    if(numberLength.length > 3){
                        let index = numberLength.charAt(numberLength.length - 4);
                        return <Digit number={this.dynamicClass(4,index)} />                            
                    }
                })()}

                {(() => {
                    //Separator
                    let numberLength = "" + this.props.number;
                    if(
                        (numberLength.length === 6) ||
                        (numberLength.length === 5))
                        {
                        return <br />                            
                    }
                })()}

                {(() => {
                    //Third Digit
                    let numberLength = "" + this.props.number;
                    if(numberLength.length > 2){
                        let index = numberLength.charAt(numberLength.length - 3);
                        return <Digit number={this.dynamicClass(3,index)} />                            
                    }
                })()}

                {(() => {
                    //Separator
                    let numberLength = "" + this.props.number;
                    if(
                        (numberLength.length === 4) ||
                        (numberLength.length === 3)){
                        return <br />                            
                    }
                })()}

                {(() => {
                    //Second Digit
                    let numberLength = "" + this.props.number;
                    if(numberLength.length > 1){
                        let index = numberLength.charAt(numberLength.length - 2);
                        return <Digit number={this.dynamicClass(2,index)} /> 
                    }
                })()}

                {(() => {
                    //First Digit
                    let numberLength = "" + this.props.number;
                    if(numberLength.length > 0){
                        let index = numberLength.charAt(numberLength.length - 1);
                        return <Digit number={this.dynamicClass(1,index)} />
                    }
                })()}
                <ValidateNumber number={this.props.number}/>               
            </div>
        );
    }
});

module.exports = EgyptianNumber;