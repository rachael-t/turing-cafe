import React from "react";
import ReservationCard from "./ReservationCard";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";

describe("ReservationCard", () => {
  it("should render a reservation card", () => {
    const { getByText } = render(
      <ReservationCard
        date={"12/29"}
        id={1}
        name={"Christie"}
        number={12}
        time={"7:00"}
      />
    );

    const resName = getByText("Christie");
    const resDate = getByText("12/29");
    const resTime = getByText("7:00 pm");
    const resGuests = getByText("Number of guests: 12");
    const cancelBtn = getByText("Cancel");

    expect(resName).toBeInTheDocument();
    expect(resDate).toBeInTheDocument();
    expect(resTime).toBeInTheDocument();
    expect(resGuests).toBeInTheDocument();
    expect(cancelBtn).toBeInTheDocument();
  });
});
