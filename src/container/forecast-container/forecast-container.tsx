import { Component } from "react";
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
          temperature={23}
        />
        <Conditions
          conditions={{
            feelsLike: 10,
            humidity: 20,
            rainProbability: 23,
            windSpeed: 22,
          }}
        />
        <ForecastItems forecastItems={[{ temperature: 23, time: "23:00" }]} />
      </Forecast>
    );
  }
}
