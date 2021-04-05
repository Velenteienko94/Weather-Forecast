import {
  TWeatherCurrent,
  TWeatherLocation,
  TWeatherForecastDayItem,
} from "../../api/weather-service/model";
import { TTempMode } from "../../App";
import {
  TConditionsProps,
  TCurrentStateProps,
  TForecastItemsProps,
} from "../../components/forecast";

export const selectCurrentStateFromForecast = (
  data: {
    current: TWeatherCurrent;
    location: TWeatherLocation;
  },
  tempMode: TTempMode
): TCurrentStateProps => {
  const { current, location } = data;
  const temperature = tempMode === "C" ? current.temp_c : current.temp_f;
  const icon = current.condition.icon;

  return {
    temperature,
    locationName: location.name,
    description: current.condition.text,
    icon: icon,
  };
};

export const selectConditionsFromForecast = (
  data: {
    current: TWeatherCurrent;
  },
  tempMode: TTempMode
): TConditionsProps => {
  const { current } = data;
  const feelsLike =
    tempMode === "C" ? current.feelslike_c : current.feelslike_f;
  const humidity = current.humidity;
  const rainProbability = current.cloud;
  const windSpeed = current.wind_kph;

  return { conditions: { feelsLike, humidity, rainProbability, windSpeed } };
};

export const selectForecastItemsFromForecast = (
  data: TWeatherForecastDayItem[],
  tempMode: TTempMode
): TForecastItemsProps => {
  const CurrentHours = new Date().getHours();
  return {
    forecastItems: data[0].hour
      .slice(CurrentHours + 1, CurrentHours + 4)
      .map((el) => {
        const temperature = tempMode === "C" ? el.temp_c : el.temp_f;
        return {
          time: el.time.split(" ")[1],
          temperature: temperature,
          icon: el.condition.icon,
        };
      }),
  };
};
