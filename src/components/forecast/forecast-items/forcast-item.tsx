import { TForecastItemProps } from "..";

export const ForecastItem = ({
  temperature,
  time,
}: TForecastItemProps): JSX.Element => {
  return (
    <div>
      <p>{time}</p>
      <p>{temperature}</p>
    </div>
  );
};
