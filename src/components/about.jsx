import React, { Component } from 'react'

export class about extends Component {
  render() {
    return (
        <div id="about">
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-md-6"> <img src="img/about.jpg" className="img-responsive" alt=""/> </div>
            <div className="col-xs-12 col-md-6">
              <div className="about-text">
                <button type = "submit">I'm a Student</button>
                <button type = "submit">I'm a Teacher</button>
                <input type = "password" placeholder = "Enter Class Code"></input>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default about
