import React from 'react'

let EgyptianNumber = require('../components/egyptianNumber');
let ValidateNumber = require('../components/validateNumber');

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

const min = 1;
const max = 199999;
export default React.createClass({
    getInitialState: function() {
        return {
            randomNumber : getRandomInt(min, max) };
    },    
    render() {
        return (
            <div className="row">
                <div className="col-xs-12">
                    <div className="card">
                        <div className="card-header">Learn egyptian maths in an easy way</div>
                        <div className="card-block text-xs-center">
                            <EgyptianNumber number={this.state["randomNumber"]} />
                            <ValidateNumber number={this.state["randomNumber"]}/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
})