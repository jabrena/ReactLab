import React from 'react'
import { Link } from 'react-router'

export default React.createClass({
  render() {
    return (
      <nav className="navbar navbar-light bg-faded">
          <button className="navbar-toggler hidden-sm-up" type="button" data-toggle="collapse" data-target="#navbar-header" aria-controls="navbar-header">
              <i className="fa fa-bars" aria-hidden="true"></i>
          </button>
          <div className="collapse navbar-toggleable-xs" id="navbar-header">
              <a className="navbar-brand" href="#">Egyptian Maths</a>
              <ul className="nav navbar-nav">
                  <li className="nav-item active">
                      <Link className="nav-link" to="/home">Home</Link>
                  </li>
                  <li className="nav-item">
                      <Link className="nav-link" to="/numbers">Numbers</Link>
                  </li>
                  <li className="nav-item">
                      <Link className="nav-link" to="/about">About</Link>
                  </li>
              </ul>
          </div>
      </nav>
    )
  }
})