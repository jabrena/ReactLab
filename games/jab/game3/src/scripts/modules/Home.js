import React from 'react'
import { Link } from 'react-router'
var TimerMixin = require('react-timer-mixin');
import ReactTimeout from 'react-timeout'

let EgyptianNumber = require('../components/egyptianNumber');


function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
const min = 1;
const max = 199999;

var Home = React.createClass({      
    getInitialState: function() {
        return {number: max};
    },
    componentWillMount(){
        this.props.setInterval(
            () => {
                this.setState({number: getRandomInt(min, max)});
            }, 500);
    },  
    render() {
        return (
            <div className="row">

                <div className="col-xs-12">
                    <div className="card">
                        <div className="card-header">Learn egyptian maths in an easy way</div>
                        <div className="card-block text-xs-center">
                            <EgyptianNumber number={this.state.number} />
                            <Link className="btn btn-primary" to="/numbers">Start</Link>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
})

export default ReactTimeout(Home)