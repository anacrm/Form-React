import React, { Component } from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";



import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      firstName: '',
      lastName: '',
      age: '',
      gender: '',
      favColor: 'Blue',
      startDate: new Date(),
      location: '',
      isVegan: false,
      isKosher: false,
      isLactoseFree: false

    }
    this.handleChangeInfo = this.handleChangeInfo.bind(this)
  }

  handleChangeDate = date => {
    this.setState({
      startDate: date
    });
  };

  handleChangeInfo(event) {
    const { name, value, type, checked } = event.target

    type === 'checkbox' ? this.setState({ [name]: checked }) :
      this.setState({
        [name]: value
      })
  }

  render() {
    return (
      <div>
        <form>
          <input placeholder='First Name' name='firstName' value={this.state.firstName} onChange={this.handleChangeInfo}></input><br></br>
          <input placeholder='Last Name' name='lastName' value={this.state.lastName} onChange={this.handleChangeInfo}></input><br></br>
          <input placeholder='Age' name='age' value={this.state.age} onChange={this.handleChangeInfo}></input><br></br>

         Birthday: <DatePicker selected={this.state.startDate} onChange={this.handleChangeDate} /><br></br>

          <label>
            <input type='radio' name='gender' value='male' chacked={this.state.gender === 'male'} onChange={this.handleChangeInfo}></input> Male
          </label>
          <label>
            <input type='radio' name='gender' value='female' chacked={this.state.gender === 'femele'} onChange={this.handleChangeInfo}></input> Female
          </label><br></br>

          <label>Location: </label>
          <select value={this.state.location} name='location' onChange={this.handleChangeInfo}>
            <option value=''>-- Please choose a location --</option>
            <option value='Germany'>Germany</option>
            <option value='Norway'>Norway</option>
            <option value='EUA'>EUA</option>
            <option value='Brazil'>Brazil</option>
          </select>
          <br></br>

          <label>
            <input type='checkbox' name='isVegan' onChange={this.handleChangeInfo} checked={this.state.isVegan}></input>
          </label>Vegan?

          <label>
            <input type='checkbox' name='isKosher' onChange={this.handleChangeInfo} checked={this.state.isKosher}></input>
          </label>Kosher?

          <label>
            <input type='checkbox' name='isLactoseFree' onChange={this.handleChangeInfo} checked={this.state.isLactoseFree}></input>
          </label> Lactose free?<br></br>
          <button>Submit</button>
          <hr></hr>
          <h2>Entered information</h2>
          <p>Your Name: {this.state.firstName}{this.state.lastName}</p>
          <p>Your age: {this.state.age}</p>
          <p>Your gender is: {this.state.gender}</p>
          <p>Your location is: {this.state.location}</p>
          <p>
            Your dietary restrition:
            Vegan:{this.state.isVegan ? ' yes':' No'}<br></br>
            Kosher:{this.state.isKosher ? ' yes':' No'}<br></br>
            Lactose Free:{this.state.isLactoseFree  ? ' yes':' No'}
          </p>
        </form>
      </div>
    )
  }
}

export default App;
