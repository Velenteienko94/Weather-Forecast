import CurrentState from "./current-state/index";
import Conditions from "./current-conditions";
import ForecastItems from "./forecast-items";
import Forecast from "./forecast";

export type TCurrentStateProps = {
  temperature: string;
  locationName: string;
  description: string;
};

export type TConditions = {
  feelsLike: string;
  humidity: string;
  windSpeed: string;
  rainProbability: string;
};

export type TConditionsProps = {
  conditions: TConditions;
};

export type TForecastItemProps = {
  time: string;
  temperature: string;
};

export type TForecastItemsProps = {
  forecastItems: TForecastItemProps[];
};

export { CurrentState, Conditions, ForecastItems, Forecast };
