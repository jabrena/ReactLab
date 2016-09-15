import React from 'react'

export default React.createClass({
  render() {
    return (
        <div className="row">
            <div className="col-xs-12">
                <div className="card">
                    <div className="card-header">About</div>
                    <div className="card-block  text-md-center">
                        <p className="card-text">
Egyptian civilization developed advanced maths in their age.
This web application tries to learn some aspects about egyptian maths in a gamified way.
                        </p>
						<table className="table">
						  <thead>
						    <tr>
						      <th>Symbol</th>
						      <th>Value</th>
						    </tr>
						  </thead>
						  <tbody>
						    <tr>
						      <td><div className="cssIcon"><span className="oneDigit_1"></span></div></td>
						      <td>1</td>
						    </tr>
						    <tr>
						      <td><div className="cssIcon"><span className="twoDigit_1"></span></div></td>
						      <td>10</td>
						    </tr>
						    <tr>
						      <td><div className="cssIcon"><span className="threeDigit_1"></span></div></td>
						      <td>100</td>
						    </tr>
						    <tr>
						      <td><div className="cssIcon"><span className="fourDigit_1"></span></div></td>
						      <td>1000</td>
						    </tr>
						    <tr>
						      <td><div className="cssIcon"><span className="fifthDigit_1"></span></div></td>
						      <td>10000</td>
						    </tr>                
						    <tr>
						      <td><div className="cssIcon"><span className="sixthDigit_1"></span></div></td>
						      <td>100000</td>
						    </tr> 
						    <tr>
						      <td><div className="cssIcon"><span className="seventhDigit_1"></span></div></td>
						      <td>1000000</td>
						    </tr>     
						  </tbody>
						</table>                        
                    </div>
                </div>
            </div>
        </div>    
    	)
  }
})
