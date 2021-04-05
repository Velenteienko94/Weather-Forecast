import { TForecastItemsProps } from "..";
import List from "../../../common/list";
import { ForecastItem } from "./forcast-item";
import styles from "./styles.module.scss";

export const ForecastItems = ({
  forecastItems,
}: TForecastItemsProps): JSX.Element => {
  return (
    <List
      className={styles.forecastItems}
      items={forecastItems.map((item) => {
        return <ForecastItem {...item} />;
      })}
    />
  );
};
