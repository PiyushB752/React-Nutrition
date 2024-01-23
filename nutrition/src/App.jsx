import React, { Component } from 'react'
import FoodBox from './Components/FoodBox'
import FoodData from './resources/FoodData.js'
import Search from './Components/Search.jsx'

export default class App extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      value: ""
    }
  }
  search = (e) =>{
    this.setState({
      value: e.target.value
    })
  }
  render() {
    const foodData = FoodData.filter((val)=>val.name.toLowerCase().includes(this.state.value.toLowerCase()))
    return (
        <div className="App">
          <Search search ={this.search} />
          {foodData.map((val)=>(
            <FoodBox key={val.id} food ={val}/>
          ))}
        </div>
    )
  }
}
