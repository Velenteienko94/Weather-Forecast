import { Component } from "react";
import { TForecastContainerProps } from ".";
import { Api } from "../../api";
import { TWeatherForecastResponse } from "../../api/weather-service/model";
import {
  Conditions,
  CurrentState,
  Forecast,
  ForecastItems,
} from "../../components/forecast";
import { forecast } from "../../utils/selectors";

type TForecastContainerState = {
  data: TWeatherForecastResponse | null;
};
export default class ForecastContainer extends Component<
  TForecastContainerProps,
  TForecastContainerState
> {
  public state: TForecastContainerState = {
    data: null,
  };

  public async componentDidMount(): Promise<void> {
    const resp = await Api.weather.forecastByLocation({
      q: "Kharkiv",
      days: 3,
    });

    this.setState({ data: resp });
  }

  public render(): JSX.Element | null {
    const { data } = this.state;
    const {
      selectConditionsFromForecast,
      selectCurrentStateFromForecast,
      selectForecastItemsFromForecast,
    } = forecast;

    if (!data) return null;

    return (
      <Forecast>
        {data.current && data.location ? (
          <CurrentState
            {...selectCurrentStateFromForecast(
              { current: data.current, location: data.location },
              this.props.tempMode
            )}
          />
        ) : null}

        {data.current ? (
          <Conditions
            {...selectConditionsFromForecast(
              { current: data.current },
              this.props.tempMode
            )}
          />
        ) : null}

        {data.forecast && data.forecast.forecastday ? (
          <ForecastItems
            {...selectForecastItemsFromForecast(
              data.forecast.forecastday,
              this.props.tempMode
            )}
          />
        ) : null}
      </Forecast>
    );
  }
}
