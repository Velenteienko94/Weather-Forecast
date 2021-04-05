import { TForecastItemProps } from "..";

export const ForecastItem = ({
  temperature,
  time,
  icon,
}: TForecastItemProps): JSX.Element => {
  return (
    <div>
      <p>{time}</p>
      <img src={icon} alt="icon" />
      <p>{temperature}</p>
    </div>
  );
};
