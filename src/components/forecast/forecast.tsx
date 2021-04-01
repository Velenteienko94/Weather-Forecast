import React from "react";
import { CurrentState, Conditions, ForecastItems } from ".";

const Forecast: React.FC = ({ children }) => {
  return <div className="wrapper">{children}</div>;
};

export default Forecast;
