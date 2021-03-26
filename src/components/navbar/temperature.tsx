import Switch from "../../common/switch";
import styles from "./styles.module.scss";

export const TemperatureMeasurment = (): JSX.Element => {
  return (
    <div className={styles.switchContainer}>
      <div className={styles.measurmentSystemContainer}>
        <span>C</span>
        <span>F</span>
      </div>
      <div>
        <Switch rotation={90} />
      </div>
    </div>
  );
};
