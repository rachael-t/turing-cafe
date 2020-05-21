import React from "react";
import ReservationContainer from "./ReservationContainer";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";

describe("ReservationContainer", () => {
  it("should render a container for the reservation cards to be displayed", () => {
    const { getByText } = render(
      <ReservationContainer
        reservations={[
          {
            id: 1,
            name: "Christie",
            date: "12/29",
            time: "7:00",
            number: 12,
          },
          {
            id: 2,
            name: "Leta",
            date: "4/5",
            time: "7:00",
            number: 2,
          },
          {
            id: 3,
            name: "Pam",
            date: "1/21",
            time: "6:00",
            number: 4,
          },
        ]}
      />
    );

    const title = getByText("Current Reservations:");

    expect(title).toBeInTheDocument();
  });
});
