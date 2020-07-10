import React, { Component } from 'react';
import "react-datepicker/dist/react-datepicker.css";
import './App.css';
import FormContainer from './FormContainer'

class Form extends Component {
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
        return(
       <FormContainer handleChangeInfo={this.handleChangeInfo} data={this.state} handleChangeDate ={this.handleChangeDate}></FormContainer>
       )
    }
}

export default Form;