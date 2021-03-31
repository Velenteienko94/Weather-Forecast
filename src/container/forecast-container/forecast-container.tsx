import { Component } from "react";
import {
  CurrentState,
  Conditions,
  ForecastItems,
} from "../../components/forecast";

export default class ForecastContainer extends Component {
  public render(): JSX.Element {
    return (
      <div>
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
      </div>
    );
  }
}
