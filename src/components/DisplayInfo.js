import { Component } from "react";
import GetFact from "./GetFact";

class DisplayInfo extends Component {

  render() { 
    return (
      <div>
        <h1>Current Abbv: {this.props.abbv}</h1>
        <GetFact abbv={this.props.abbv}/>
      </div>
    )
  }
}
 
export default DisplayInfo;