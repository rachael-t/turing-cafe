import React from "react";
import App from "./App";
import { render, waitFor, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";

describe("App", () => {
  it("should display saved reservations", async () => {
    const { getByText } = render(<App />);

    const header = getByText("Turing Cafe Reservations");
    const submitBtn = getByText("Make Reservation");
    const savedName = await waitFor(() => getByText("Christie"));

    expect(header).toBeInTheDocument();
    expect(submitBtn).toBeInTheDocument();
    expect(savedName).toBeInTheDocument();
  });

  it("should display a reservation on the page once a user submits it", () => {
    const { getByText, getByPlaceholderText } = render(<App />);

    const nameInput = getByPlaceholderText("Name");
    const dateInput = getByPlaceholderText("Date (mm/dd)");
    const timeInput = getByPlaceholderText("Time");
    const numInput = getByPlaceholderText("Number of guests");

    fireEvent.change(nameInput, { target: { value: "Luna" } });
    fireEvent.change(dateInput, { target: { value: "06/08" } });
    fireEvent.change(timeInput, { target: { value: "6:30" } });
    fireEvent.change(numInput, { target: { value: 4 } });
    fireEvent.click(getByText("Make Reservation"));

    expect(getByText("Number of guests: 4")).toBeInTheDocument();
  });
});
