import React from 'react'
import { Link } from 'react-router'

let EgyptianNumber = require('../components/egyptianNumber');

export default React.createClass({
  render() {
    return (
        <div className="row">
            <div className="col-xs-12">
                <br />
                <div className="card">
                    <div className="card-header">Learn egyptian maths in an easy way</div>
                    <div className="card-block text-xs-center">
                        <EgyptianNumber number={10} />
                        <Link className="btn btn-primary" to="/numbers">Start</Link>
                    </div>
                </div>
            </div>
        </div>
    )
  }
})