import React from 'react';
import './ReservationContainer.css';
import ReservationCard from '../ReservationCard/ReservationCard';

const ReservationContainer = ({ reservations }) => {
    return (
        <div className='reservation-container'>
            <h2>Current Reservations:</h2>
        </div>
    )
}

export default ReservationContainer;