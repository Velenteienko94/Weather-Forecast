import { TTemperatureMeasurmentProps } from ".";
import Switch from "../../common/switch";
import styles from "./styles.module.scss";

export const TemperatureMeasurment = ({
  switchChangeHandler,
  tempMode,
}: TTemperatureMeasurmentProps): JSX.Element => {
  return (
    <div className={styles.switchContainer}>
      <div className={styles.measurmentSystemContainer}>
        <span>C</span>
        <span>F</span>
      </div>
      <div>
        <Switch
          rotation={90}
          active={tempMode !== "C"}
          onSwitchChange={switchChangeHandler}
        />
      </div>
    </div>
  );
};
