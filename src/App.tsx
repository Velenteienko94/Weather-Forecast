import { useEffect, useState } from "react";
import "./App.css";
import { Api } from "./api";
import { TWeatherByLocationResponse } from "./api/weather-service/model";

function App() {
  const [data, setData] = useState<TWeatherByLocationResponse>();

  useEffect(() => {
    (async () => {
      const resp = await Api.weather.weatherByLocation({
        q: "Kiev",
        aqi: "no",
      });

      const forecast = await Api.weather.forecastByLocation({
        q: "London",
        days: 3,
      });

      console.log(forecast.forecast.forecastday);
      setData(resp);
    })();
  }, []);

  return <div className="App">{data && <div>{data.location.name}</div>}</div>;
}

export default App;
