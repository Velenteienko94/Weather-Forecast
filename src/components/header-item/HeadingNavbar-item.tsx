import React from "react";
import { TWeatherForecastResponse } from "../../api/weather-service/model";

export const HeadingNavbar = (props: TWeatherForecastResponse | undefined) => {
  return (
    <nav>
      <div className="nav-wrapper">
        <a href="/" className="brand-logo">
          {props?.location.name}
        </a>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li>
            <a href="collapsible.html">Change location</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default HeadingNavbar;
