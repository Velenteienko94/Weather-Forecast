import { TDaysProps } from ".";
import styles from "./styles.module.scss";

export const Days = ({ currentDay, days }: TDaysProps): JSX.Element => {
  const renderDots = () =>
    new Array(days)
      .fill(undefined)
      .map((_, i) => (
        <span
          className={`${styles.dot} ${currentDay === i ? styles.selected : ""}`}
          key={i + Math.random()}
        />
      ));

  return <ul className={styles.list}>{renderDots()}</ul>;
};
