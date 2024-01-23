import React, { Component } from 'react'
import './FoodBox.css';
import Search from'./Search';


export default class FoodBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 1,
    };
  }
  inputHandle = (event) => {
    this.setState({value: event.target.value});
  };
  addButton = () => {
    this.setState({value: this.state.value + 1})
  };
  reset = () =>{
    this.setState({value: 1})
  }
  render() {
    return (
      <div>
        <div className="box">
          <article className='media'>
            <div className="media-left">
              <figure className='image is-64x64'>
                <img src={this.props.food.img} />
              </figure>
            </div>
            <div className="media-content">
              <div className="content">
                <p>
                  <strong>{this.props.food.name}</strong><br />
                  <small>{this.props.food.cal} calories</small>
                </p>
              </div>
            </div>
            <div className="media-right">
              <div className="field has-addons">
                <div className="control">
                  <input type="number" className='input' value={this.state.value} placeholder='Enter Here' onChange={this.inputHandle}/>
                </div>
                <div className="control">
                  <button className='button is-info' onClick={this.addButton}>
                    +
                  </button>
                </div>
              </div>
            </div>
          </article>
          <div className="calories">
          <h4>{this.state.value} {this.props.food.name} = {this.state.value * this.props.food.cal} calories</h4>
          <button className='Reset' onClick={this.reset}>reset</button>
        </div>
        </div>
        <br />
      </div>
    )
  }
}

