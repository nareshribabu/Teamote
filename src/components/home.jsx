import React, { Component } from "react";
import Navigation from './navigation';
import Header from './header';
import Features from './features';
import About from './about';
import Services from './services';
import Gallery from './gallery';
import Testimonials from './testimonials';
import Team from './Team';
import Contact from './contact';
import JsonData from '../data/data.json';
export class Home extends Component {
    render() {
      return (
<div>
        <Navigation />
        <Header data={this.state.landingPageData.Header} />
        <About data={this.state.landingPageData.About} />
        <Features data={this.state.landingPageData.Features} />
        <Services data={this.state.landingPageData.Services} />
        <Team data={this.state.landingPageData.Team} />
        <Contact data={this.state.landingPageData.Contact} />
      </div>);

    }
}

export default Home;