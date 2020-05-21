import React, { Component } from 'react';
import './Form.css';

class Form extends Component {
    constructor() {
        super();
        this.state = {
            id: '',
            name: '',
            date: '',
            time: '',
            number: '',
        }
    }

    handleChange = (e) => {

    }

    submitReservation = (e) => {

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
                    type='text'
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