"use strict";

const React = require("react");
const ReactDOM = require("react-dom");

let ValidateNumber = React.createClass({
	getInitialState: function() {
	    return {
	    	number: this.props.number, 
	    	answer: ""};
	},	
    handleChange: function (event) {
    	this.setState({answer: event.target.value});
    },
    handleClick: function (event) {
    	event.preventDefault();
    	console.log(this.state["number"]);
    	console.log(this.state["answer"]);
    	if(this.state["number"] == this.state["answer"]){
    		alert("SUCCESS");
    	}else {
    		alert("FAILED. Try again");
    		
    	}
    	document.location.href = "/#home";
    },
    render: function () {
        return (
            <form className="form-inline">
                <fieldset>
                    <div className="row">
                        <div className="col-xs-4">
                            <div className="form-group">
                                <label htmlFor="number" className="sr-only">Number:</label>
                                <input type="number" 
                                	className="form-control" id="number" 
                                	onChange={this.handleChange} />
                            </div>
                        </div>
                        <div className="col-xs-4">    
                            <button type="submit" 
                            	className="btn btn-primary"
                            	onClick={this.handleClick}>Validate</button>
                        </div>
                        <div className="col-xs-4"> 
                            <a className="btn btn-secondary" href="#/numbers" role="button">
                                <i className="fa fa-refresh"></i>
                            </a>
                        </div>
                    </div>
                </fieldset>
            </form>
        );
    }
});

module.exports = ValidateNumber;