import React, { Component } from 'react'
import Navigation from './components/navigation';
import Header from './components/header';
import Features from './components/features';
import About from './components/about';
import Services from './components/services';
import Gallery from './components/gallery';
import Testimonials from './components/testimonials';
import Team from './components/Team';
import Contact from './components/contact';
import JsonData from './data/data.json';
import Home from './components/home';
import Main from './components/Main'


export class App extends Component {
  render() {
    return (
      <div className="App">
      
      <Main />
    </div>
    )
  }
}

export default App;

/*
<Gallery />
<Testimonials data={this.state.landingPageData.Testimonials} />
*/