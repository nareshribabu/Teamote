import React, { Component} from "react";
import Navigation from "./navigation";
import axios from 'axios';

// import { ClassCard } from './ClassCard'
import Card from './Card';
import './rooms.css';
import Webcam from "react-webcam";


export class RoomsTeacher extends Component {
  
  pushed = false;
  interval = null;
  // screenshot = "";
  constructor(props){
    super(props);
    this.state = { screenshot: null, time:null, roomCode:null }
    // this can be moved directly to the onClick event
    // this.screenshot = this.screenshot.bind(this);

    
}


submitScreenshot() {
  let form_data = new FormData();
    form_data.append('image', this.state.screenshot);
    form_data.append('time', this.state.time);
    form_data.append('roomCode', this.state.roomCode);
    console.log(this.state);
    // form_data.append('', this.state.content);
    let url = 'http://localhost:8000/api/posts/';
    axios.post(url, form_data, {
      headers: {
        'content-type': 'multipart/form-data'
      }
    })
        .then(res => {
          console.log(res.data);
        })
        .catch(err => console.log(err))
  };


screenshot() {

    this.setState({roomCode:this.state.roomCode});
  }
  

  onButtonPush() {
    
    if(!this.pushed){ 
    this.interval = setInterval(() => {
      this.screenshot();
    
    }, 1000);
    this.pushed = true;
  }
    


  }
  
  updateInputValue(event) {
    console.log(event.target.value);
    this.setState({
      roomCode:event.target.value
    });
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    // this.onButtonPush();

    return (
     <div id="full">
         <Navigation></Navigation>
        {/* <ClassCard/> */}
       
        <div class="container" id="topform">
        <div class="row mt-5">
          <div class="col-12">
          <div class="jumbotron">
  <h1>Welcome to your <i>Teacher Room</i></h1>
  <p>Click the button below and enable your webcam to start sending your video feed over. Don't worry, the host won't see your face, and neither will we!</p>
  <form class="form-inline">

  <div class="form-group">
 &nbsp;
    <label for="inputPassword2" class="sr-only">Room Code</label>
    <input  class="form-control btn-lg" id="inputPassword2" placeholder="Room Code" value={this.state.roomCode} onChange={event => this.updateInputValue(event)} />&nbsp;
    <a onclick={this.onButtonPush()} class="btn btn-primary btn-lg " href="#" role="button">Begin Streaming</a>
  </div>
</form>

</div>
          </div>

        </div>
        <div class="row">
  <div class="col-md-2">&nbsp;</div>
  <div class="col-md-8">
    {/* <div class="row space-16"></div> */}
    <div class="row">
      <div class="col-12 text-center">
      </div>
      <div class="col-6">
        <div class="thumbnail">
          <div class="caption text-center" onclick="location.href='https://flow.microsoft.com/en-us/connectors/shared_slack/slack/'">
            {/* <div class="position-relative">
              <img src="https://az818438.vo.msecnd.net/icons/slack.png"  />
            </div> */}
            <h4 id="thumbnail-label"><a href="https://flow.microsoft.com/en-us/connectors/shared_slack/slack/" target="_blank">Microsoft Slack</a></h4>
            <p><i class="glyphicon glyphicon-user light-red lighter bigger-120"></i>&nbsp;Auditor</p>
            <div class="thumbnail-description smaller">Slack is a team communication tool, that brings together all of your team communications in one place, instantly searchable and available wherever you go.</div>
          </div>
          <div class="caption card-footer text-center">
            <ul class="list-inline">
              <li><i class="people lighter"></i>&nbsp;7 Active Users</li>
              <li></li>
              <li><i class="glyphicon glyphicon-envelope lighter"></i><a href="#">&nbsp;Help</a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div class="col-md-2">&nbsp;</div>
  </div>
</div>
        </div>
     </div>
    );
  }
}

export default RoomsTeacher;