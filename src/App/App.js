import React, { Component } from "react";
import "./App.css";
import Form from "../Form/Form";
import ReservationContainer from "../ReservationContainer/ReservationContainer";

class App extends Component {
  constructor() {
    super();
    this.state = {
      reservations: [],
    };
  }

  componentDidMount() {
    fetch("http://localhost:3001/api/v1/reservations")
      .then((response) => response.json())
      .then((data) => this.setState({ reservations: data }))
      .catch((err) => console.error(err));
  }

  addReservation = (newReservation) => {
    this.setState({
      reservations: [...this.state.reservations, newReservation],
    });
  };

  render() {
    return (
      <div className="App">
        <h1 className="app-title">Turing Cafe Reservations</h1>
        <div className="resy-form">
          <Form addReservation={this.addReservation} />
        </div>
        <div className="resy-container">
          <ReservationContainer reservations={this.state.reservations} />
        </div>
      </div>
    );
  }
}

export default App;
