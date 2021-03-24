import {
  TWeatherByLocationQuery,
  TWeatherByLocationResponse,
  TForecastByLocationQuery,
  TWeatherForecastResponse,
} from "./model";

export class WeatherService {
  private response_type: "json" | "xml" = "json";
  private base_api: string = "http://api.weatherapi.com/v1/";
  private api_key: string = process.env.REACT_APP_WEATHER_API_KEY || "";

  private async fetch<RequestType extends Record<string, any>, ResponseType>(
    url: string,
    init?: RequestInit & { params?: RequestType }
  ): Promise<ResponseType> {
    const query = new URLSearchParams();
    const params = init?.params;

    if (params) {
      for (const key in params) {
        query.append(key, String(params[key]));
      }
    }

    query.append("key", this.api_key);

    const queryString = params ? `?${query.toString()}` : "";

    try {
      const resp = await fetch(
        `${this.base_api}${url}.${this.response_type}${queryString}`,
        init
      );

      return await resp.json();
    } catch (error) {
      throw error;
    }
  }

  public set responseType(type: "json" | "xml") {
    this.response_type = type;
  }

  public async weatherByLocation({ q, aqi }: TWeatherByLocationQuery) {
    return await this.fetch<
      TWeatherByLocationQuery,
      TWeatherByLocationResponse
    >("current", {
      params: {
        q,
        aqi,
      },
    });
  }

  public async forecastByLocation({ q, days }: TForecastByLocationQuery) {
    return await this.fetch<TForecastByLocationQuery, TWeatherForecastResponse>(
      "forecast",
      {
        params: {
          q,
          days: days,
        },
      }
    );
  }
}
