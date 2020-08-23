import React, { Component} from "react";
import Navigation from "./navigation";
import axios from 'axios';

// import { ClassCard } from './ClassCard'
import Card from './Card';
import './rooms.css';
import Webcam from "react-webcam";


export class Rooms extends Component {
  
  pushed = false;
  interval = null;
  btn = null;
 
  // screenshot = "";
  constructor(props){
    super(props);
    this.state = { screenshot: null, time:null, lessonCode:null , studentName:null,disabled:false};
    // this can be moved directly to the onClick event
    // this.screenshot = this.screenshot.bind(this);
}


joinLesson() {
  let form_data = new FormData();
  form_data.append('lessonCode', this.state.lessonCode);
  form_data.append('studentName',this.state.studentName);

  let join_url = 'https://azure-ht6-test1.azurewebsites.net/join_lesson/';
  axios.post(join_url, form_data, {
    headers: {
      'content-type': 'multipart/form-data',
      'Origin':"http://localhost:8080",
        'Access-Control-Allow-Origin':'*',
    }
  })
      .then(res => {
        console.log(res.data);
      })
      .catch(err => console.log(err))
};


submitScreenshot() {
  let form_data = new FormData();
    form_data.append('image', this.state.screenshot);
    form_data.append('time', this.state.time);
    form_data.append('lessonCode', this.state.lessonCode);
    form_data.append('studentName',this.state.studentName);
    console.log(this.state);
    // form_data.append('', this.state.content);
    let url = 'https://azure-ht6-test1.azurewebsites.net/post_student_image/';
    axios.post(url, form_data, {
      headers: {
        'content-type': 'multipart/form-data',
        'Origin':"http://localhost:8080",
        'Access-Control-Allow-Origin':'*',
      }
    })
        .then(res => {  
          console.log(res.data);
        })
        .catch(err => console.log(err))
  };


screenshot() {
  this.interval = setInterval(() => {
    // access the webcam trough this.refs
    var screenshot = this.refs.webcam.getScreenshot();
    console.log("Screenshot taken.")
    this.setState({screenshot: screenshot,time:Date(),lessonCode:this.state.lessonCode});

    this.submitScreenshot();
    
    if(this.pushed) {
      // this.setState({disabled: true});
    }
  }, 1000);
    
  }
  

  onButtonPush() {
    console.log("RUNNING");
    // this.setState({disabled: true});
    this.joinLesson();
    if(!this.pushed){ 
      this.screenshot();
    this.pushed = true;
  }
    


  }
  
  updateInputValue(event) {
    console.log(event.target.value);
    this.setState({
      lessonCode:event.target.value
    });
  }

  updateStudentNameValue(event) {
    console.log(event.target.value);
    this.setState({
      studentName:event.target.value
    });
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
  

    return (
     <div id="full">
         <Navigation></Navigation>
        {/* <ClassCard/> */}
       
        <div class="container" id="topform">
        <div class="row mt-5">
          <div class="col-12">
          <div class="jumbotron mt-5">
  <h1>Welcome to your Room</h1>
  <p>Click the button below and enable your webcam to start sending your video feed over. Don't worry, the host won't see your face, and neither will we!</p>
  <form class="form-inline">

  <div class="form-group">
 &nbsp;
    <label for="inputPassword2" class="sr-only">Room Code</label>
    <input  class="form-control btn-lg" id="roomCode" placeholder="Room Code" value={this.state.lessonCode} onChange={event => this.updateInputValue(event)} />&nbsp;
    <input  class="form-control btn-lg" id="studentName" placeholder="Student Name" value={this.state.studentName} onChange={event => this.updateStudentNameValue(event)} />
    <a disabled={this.state.disabled} onclick={this.onButtonPush()} class="btn btn-primary btn-lg " href="#" role="button">Begin Streaming</a>
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
        <div id="video-stream">
      <Webcam audio ={false} ref='webcam'  height = {50 + '%'}
  width = {50 + '%'}/> 
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

export default Rooms;