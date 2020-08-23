import React, { Component} from "react";
import Navigation from "./navigation";
import axios from 'axios';
import ProgressBar from 'react-bootstrap/ProgressBar';
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
    this.startState = {}
    // this can be moved directly to the onClick event
    // this.screenshot = this.screenshot.bind(this);

    
}

sendRoomRequest() {
  let form_data = new FormData();
  form_data.append('teacherName','asdasdasd');
  // form_data.append('', this.state.content);
  let url = 'https://azure-ht6-test1.azurewebsites.net/';
  axios.post(url, form_data, {
    headers: {
      'content-type': 'multipart/form-data'
    }
  })
      .then(res => {
        this.startState = {'lessonCode':res.data['lessonCode']};
        console.log(res.data);
      })
      .catch(err => console.log(err))
};



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
  
  // updateInputValue(event) {
  //   console.log(event.target.value);
  //   this.setState({
  //     roomCode:event.target.value
  //   });
  // }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    // this.onButtonPush();
    
    this.sendRoomRequest();
    return (
     <div id="full">
         <Navigation></Navigation>
        {/* <ClassCard/> */}
       
        <div class="container" id="topform">
        <div class="row mt-5">
          <div class="col-12">
          {/* <div class="jumbotron"> */}
          <h1 >Welcome to your <i>Teacher View</i></h1>
    <p>Your room code is {this.state.roomCode}. Share it with your students!</p>
    <p>Below is a live-view of the emotions your students are registering. Keep this tab open as you present to gauge classroom attentiveness!</p>
          {/* <form class="form-inline">

          <div class="form-group">
        &nbsp;
            {/* <label for="inputPassword2" class="sr-only">Room Code</label>
            <input  class="form-control btn-lg" id="inputPassword2" placeholder="Room Code" value={this.state.roomCode} onChange={event => this.updateInputValue(event)} />&nbsp;
            <a onclick={this.onButtonPush()} class="btn btn-primary btn-lg " href="#" role="button">Begin Streaming</a> */}
          {/* </div> */}
        {/* </form> */} 

        </div>
        </div>
        <br/>
        <br/>
        <div class="row mt-5">
        <div>
  <h3>Happiness</h3>
  <ProgressBar animated variant="success" now={40} />
  <h3>Disgust</h3>
  <ProgressBar animated variant="info" now={20} />
  <h3>Sadness</h3>
  <ProgressBar animated variant="warning" now={60} />
  <h3>Fear</h3>
  <ProgressBar animated variant="danger" now={80} />
  <h3>Neutral</h3>
  <ProgressBar animated variant="danger" now={80} />
</div>
<div c>

</div>
        </div>
        </div>
        // </div>
    
     
    );
  }
}

export default RoomsTeacher;