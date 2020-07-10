import React from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";


function FormContainer(props) {
    return (
        <div>
            <form>
                <input placeholder='First Name' name='firstName' value={props.data.firstName} onChange={props.handleChangeInfo}></input><br></br>
                <input placeholder='Last Name' name='lastName' value={props.data.lastName} onChange={props.handleChangeInfo}></input><br></br>
                <input placeholder='Age' name='age' value={props.data.age} onChange={props.handleChangeInfo}></input><br></br>

           Birthday: <DatePicker selected={props.data.startDate} onChange={props.handleChangeDate} /><br></br>

                <label>
                    <input type='radio' name='gender' value='male' chacked={props.data.gender === 'male'} onChange={props.handleChangeInfo}></input> Male
            </label>
                <label>
                    <input type='radio' name='gender' value='female' chacked={props.data.gender === 'femele'} onChange={props.handleChangeInfo}></input> Female
            </label><br></br>

                <label>Location: </label>
                <select value={props.data.location} name='location' onChange={props.handleChangeInfo}>
                    <option value=''>-- Please choose a location --</option>
                    <option value='Germany'>Germany</option>
                    <option value='Norway'>Norway</option>
                    <option value='EUA'>EUA</option>
                    <option value='Brazil'>Brazil</option>
                </select>
                <br></br>

                <label>
                    <input type='checkbox' name='isVegan' onChange={props.handleChangeInfo} checked={props.data.isVegan}></input>
                </label>Vegan?

            <label>
                    <input type='checkbox' name='isKosher' onChange={props.handleChangeInfo} checked={props.data.isKosher}></input>
                </label>Kosher?

            <label>
                    <input type='checkbox' name='isLactoseFree' onChange={props.handleChangeInfo} checked={props.data.isLactoseFree}></input>
                </label> Lactose free?<br></br>
                <button>Submit</button>
                <hr></hr>
                <h2>Entered information</h2>
                <p>Your Name: {props.data.firstName}{props.data.lastName}</p>
                <p>Your age: {props.data.age}</p>
                <p>Your gender is: {props.data.gender}</p>
                <p>Your location is: {props.data.location}</p>
                <p>
                    Your dietary restrition:
              Vegan:{props.data.isVegan ? ' yes' : ' No'}<br></br>
              Kosher:{props.data.isKosher ? ' yes' : ' No'}<br></br>
              Lactose Free:{props.data.isLactoseFree ? ' yes' : ' No'}
                </p>
            </form>
        </div>
    )


}

export default FormContainer