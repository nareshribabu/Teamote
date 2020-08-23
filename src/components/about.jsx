import React, { Component } from 'react'

export class about extends Component {
  render() {
    return (
        <div id="about">
        <div className="container">
          <div className="row">
            <div className="about-text">
              <button class = "st-button" type = "submit">I'm a Student</button>
              <button type = "submit">I'm a Teacher</button>
              <input type = "password" placeholder = "Enter Class Code"></input>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default about
