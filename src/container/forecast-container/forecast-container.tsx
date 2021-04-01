import React, { Component } from "react";
import { Api } from "../../api";
import {
  Conditions,
  CurrentState,
  Forecast,
  ForecastItems,
} from "../../components/forecast";

export default class ForecastContainer extends Component {
  public render(): JSX.Element {
    return (
      <Forecast>
        <CurrentState
          description="sunny"
          locationName="Paris"
          temperature="23"
        />
        <Conditions
          conditions={{
            feelsLike: "ala",
            humidity: "huak",
            rainProbability: "lorem",
            windSpeed: "ihbfchg",
          }}
        />
        <ForecastItems forecastItems={[{ temperature: "23", time: "23:00" }]} />
      </Forecast>
    );
  }
}
