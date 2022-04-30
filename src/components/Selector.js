import {Component, useState, useEffect} from 'react'
import DisplayInfo from './DisplayInfo';
// import statedata from './statedata/index';
// "https://api.covidtracking.com/v1/states/info.json"


const Selector = () => {

  const [current, setCurrent] = useState("CA")
  const [stateData, setStateData] = useState([{}])


  const getOptions = () => {
    let options = stateData.map(row => (<option value={row['abbv']}>{row['name']}</option>));
    return options
  }

  const getData = async () => {
    const res = await fetch("https://api.covidtracking.com/v1/states/info.json")
    const body = await res.json()
    const parsed = body.map(stateObj =>  {return {name: stateObj.name, abbv: stateObj.state}})
    setStateData(parsed)
  }

  useEffect(() => {
    getData()
  }, [])


  const handleChange = (e) => setCurrent(e.target.value)

  return (
    <div>
      <DisplayInfo abbv={current}/>
      <select value={current} onChange={handleChange}>
        {getOptions()}
      </select>
    </div>
  );
}

// class Selector extends Component {
  // state = { 
  //   current: "CA",
  //   stateData: [{}]
  //  } 

  // getOptions = () => {
  //   let options = this.state.stateData.map(row => (<option value={row['abbv']}>{row['name']}</option>));
  //   return options
  // }

  // componentDidMount = async () => {
  //   const res = await fetch("https://api.covidtracking.com/v1/states/info.json")
  //   const body = await res.json()
  //   const parsed = body.map(stateObj =>  {return {name: stateObj.name, abbv: stateObj.state}})
  //   this.setState({stateData: parsed})
  // }

  // handleChange = (e) => {
  //   this.setState({
  //     current: e.target.value
  //   })
  // } 

//   render() { 
    // return (
    //   <div>
    //     <DisplayInfo abbv={this.state.current}/>
    //     <select value={this.state.current} onChange={this.handleChange}>
    //       {this.getOptions()}
    //     </select>
    //   </div>
    // );
//   }
// }
 
export default Selector;