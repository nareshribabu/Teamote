import React, { Component } from 'react'
import { Link } from "react-router-dom";

export class about extends Component {
  render() {
    return (
        <div id="about">
        <div className="container">
          <div className="row">
            <div className = "buttons-container">
              {/* <input class = "input-password" type = "password" placeholder = "Enter Class Code"></input> */}
              <div className="about-text">
                <Link to = "/rooms">
                  <button class = "btn-custom s-button" type = "submit">I'm a Student</button>
                </Link>
                <Link to = "/rooms-teacher">
                  <button class = "btn-custom t-button" type = "submit">I'm a Teacher</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default about
