import { TForecastItemsProps } from "..";
import List from "../../../common/list";
import { ForecastItem } from "./forcast-item";

export const ForecastItems = ({
  forecastItems,
}: TForecastItemsProps): JSX.Element => {
  return (
    <List
      items={forecastItems.map((item) => {
        return <ForecastItem time={item.time} temperature={item.temperature} />;
      })}
    />
  );
};
