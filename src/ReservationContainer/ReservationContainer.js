import React from 'react';
import './ReservationContainer.css';
import ReservationCard from '../ReservationCard/ReservationCard';

const ReservationContainer = ({ reservations }) => {
    const reservationsToRender = reservations.map(reservation => {
        return <ReservationCard { ...reservation } />
    })

    return (
        <div className='reservation-container'>
            <h2>Current Reservations:</h2>
            {reservationsToRender}
        </div>
    )
}

export default ReservationContainer;