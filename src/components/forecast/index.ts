import CurrentState from "./current-state/index";
import Conditions from "./current-conditions";
import ForecastItems from "./forecast-items";
import Forecast from "./forecast";

export type TCurrentStateProps = {
  temperature: number;
  locationName: string;
  description: string;
};

export type TConditions = {
  feelsLike: number;
  humidity: number;
  windSpeed: number;
  rainProbability: number;
};

export type TConditionsProps = {
  conditions: TConditions;
};

export type TForecastItemProps = {
  time: string;
  temperature: number;
};

export type TForecastItemsProps = {
  forecastItems: TForecastItemProps[];
};

export { CurrentState, Conditions, ForecastItems, Forecast };
