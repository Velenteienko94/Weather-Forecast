import { Component } from "react";
import { Api } from "../../api";
import {
  Conditions,
  CurrentState,
  Forecast,
  ForecastItems,
} from "../../components/forecast";
import { forecast } from "../../utils/selectors";

export default class ForecastContainer extends Component {
  public async componentDidMount(): Promise<void> {
    const resp = await Api.weather.forecastByLocation({
      q: "Kharkiv",
      days: 3,
    });

    if (resp.current) {
      const selectResult = forecast.selectConditionsFromForecast(
        { current: resp.current },
        "C"
      );

      console.log(selectResult);
    }
  }

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
