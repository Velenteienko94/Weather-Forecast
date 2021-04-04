type TBaseWeatherQuery = {
  q: string;
};

export type TWeatherByLocationQuery = {
  aqi: "yes" | "no";
} & TBaseWeatherQuery;

export type TForecastByLocationQuery = {
  days: number;
} & TBaseWeatherQuery;

export type TWeatherLocation = {
  name: string;
  region: string;
  country: string;
  lat: number;
  lon: number;
  tz_id: string;
  localtime_epoch: number;
  localtime: string;
};

export type TWeatherAirQuality = {
  co: number;
  no2: number;
  o3: number;
  so2: number;
  pm2_5: number;
  pm10: number;
  "us-epa-index": number;
  "gb-defra-index": number;
};

export type TWeatherCondition = {
  text: string;
  icon: string;
  code: number;
};

export type TWeatherCurrent = {
  last_updated_epoch: number;
  last_updated: string;
  temp_c: number;
  temp_f: number;
  is_day: number;
  condition: TWeatherCondition;
  wind_mph: number;
  wind_kph: number;
  wind_degree: number;
  wind_dir: string;
  pressure_mb: number;
  pressure_in: number;
  precip_mm: number;
  precip_in: number;
  humidity: number;
  cloud: number;
  feelslike_c: number;
  feelslike_f: number;
  vis_km: number;
  vis_miles: number;
  uv: number;
  gust_mph: number;
  gust_kph: number;
  air_quality?: TWeatherAirQuality;
};

export type TWeatherByLocationResponse = {
  location: TWeatherLocation;
  current: TWeatherCurrent;
};

export type TWeatherAstro = {
  sunrise: string;
  sunset: string;
  moonrise: string;
  moonset: string;
  moon_phase: string;
  moon_illumination: string;
};

export type TWeatherForecastDayItem = {
  date: string;
  date_epoch: number;
  day: {
    maxtemp_c: number;
    maxtemp_f: number;
    mintemp_c: number;
    mintemp_f: number;
    avgtemp_c: number;
    avgtemp_f: number;
    maxwind_mph: number;
    maxwind_kph: number;
    totalprecip_mm: number;
    totalprecip_in: number;
    avgvis_km: number;
    avgvis_miles: number;
    avghumidity: number;
    daily_will_it_rain: number;
    daily_chance_of_rain: string;
    daily_will_it_snow: number;
    daily_chance_of_snow: string;
    condition: TWeatherCondition;
    uv: number;
  };
  astro: TWeatherAstro;
  hour: {
    time_epoch: number;
    time: string;
    temp_c: number;
    temp_f: number;
    is_day: number;
    condition: TWeatherCondition;
    wind_mph: number;
    wind_kph: number;
    wind_degree: number;
    wind_dir: string;
    pressure_mb: number;
    pressure_in: number;
    precip_mm: number;
    precip_in: number;
    humidity: number;
    cloud: number;
    feelslike_c: number;
    feelslike_f: number;
    windchill_c: number;
    windchill_f: number;
    heatindex_c: number;
    heatindex_f: number;
    dewpoint_c: number;
    dewpoint_f: number;
    will_it_rain: number;
    chance_of_rain: string;
    will_it_snow: number;
    chance_of_snow: string;
    vis_km: number;
    vis_miles: number;
    gust_mph: number;
    gust_kph: number;
    uv: number;
  }[];
};

export type TWeatherForecastResponse = {
  current?: TWeatherCurrent;
  location?: TWeatherLocation;
  forecast?: {
    forecastday: TWeatherForecastDayItem[];
  };
};
