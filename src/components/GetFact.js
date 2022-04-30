import { Component } from "react";

class GetFact extends Component {
  state = { 
    info: "..."
   } 

  fetchInfo =  async () => {
    fetch("https://uselessfacts.jsph.pl/random.json")
    .then(x => x.json())
    .then(x => this.setState({info: x.text}))
    .catch(e => this.setState({info: "unable to fetch data"}))
   }

   render() {
     return(
       <div>
         <button onClick={this.fetchInfo}>Click for info about {this.props.abbv}</button>
         <p>{this.state.info}</p>
       </div>
     )
   }
}
 
export default GetFact;