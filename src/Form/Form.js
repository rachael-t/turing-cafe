import React, { Component } from 'react';
import './Form.css';

class Form extends Component {
    constructor(props) {
        super();
        this.state = {
            name: '',
            date: '',
            time: '',
            number: '',
        }
    }

    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }

    submitReservation = (e) => {
        e.preventDefault();
        const newReservation = { 
            date: this.state.date,
            id: Date.now(),
            name: this.state.name,
            number: parseInt(this.state.number),
            time: this.state.time
        };
        this.props.addReservation(newReservation);
        this.resetForm();
    }

    resetForm = () => {
        this.setState({
            id: '',
            name: '',
            date: '',
            time: '',
            number: '',
        })
    }

    render() {
        return (
            <form>
                <input
                    type='text'
                    placeholder='Name'
                    name='name'
                    value={this.state.name}
                    onChange={this.handleChange}
                />
                <input
                    type='text'
                    placeholder='Date (mm/dd)'
                    name='date'
                    value={this.state.date}
                    onChange={this.handleChange}
                />
                <input
                    type='text'
                    placeholder='Time'
                    name='time'
                    value={this.state.time}
                    onChange={this.handleChange}
                />
                 <input
                    type='number'
                    placeholder='Number of guests'
                    name='number'
                    value={this.state.number}
                    onChange={this.handleChange}
                />
                <button className='submit-button' onClick={this.submitReservation}>
                    Make Reservation
                </button>
            </form>
        )
    }
}

export default Form;