import React, { useEffect, useState } from "react";
import "./App.css";
import { Api } from "./api";
import { TWeatherForecastResponse } from "./api/weather-service/model";
import HeadingNavbar from "./components/navbar";

function App() {
  const [data, setData] = useState<TWeatherForecastResponse>();

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

      setData({ ...forecast, ...resp });
    })();
  }, []);

  return (
    <div className="App">
      {data && <HeadingNavbar location={data.location} current={data.current} forecast={data.forecast} /> }
    </div>
  );
}

export default App;
