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
    console.log(this.props);
    const resp = await Api.weather.forecastByLocation({
      q: "london",
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
        {/* have a mistake in  ForecastItems data validation*/}
        {data.forecast && data.forecast.forecastdays ? (
          <ForecastItems
            {...selectForecastItemsFromForecast(
              data.forecast.forecastdays,
              this.props.tempMode
            )}
          />
        ) : null}
      </Forecast>
    );
  }
}
