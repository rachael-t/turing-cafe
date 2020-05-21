import React from "react";
import "./ReservationCard.css";

const ReservationCard = ({ date, id, name, number, time }) => {
  return (
    <div className="reservation-card">
      <h3>{name}</h3>
      <p>{date}</p>
      <p>{time} pm</p>
      <p>Number of guests: {number}</p>
      <button className={id}>Cancel</button>
    </div>
  );
};

export default ReservationCard;
