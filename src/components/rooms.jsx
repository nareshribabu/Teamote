import React, { Component } from "react";
import Navigation from "./navigation";
import { Card } from "@material-ui/core";

export class Rooms extends Component {
  render() {
    return (
     <div>
         <Navigation></Navigation>
         <Card></Card>
     </div>
    );
  }
}

export default Rooms;