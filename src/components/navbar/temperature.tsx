import { useState } from "react";
import Switch from "../../common/switch";
import styles from "./styles.module.scss";

export const TemperatureMeasurment = (): JSX.Element => {
  const [active, setActive] = useState<boolean>(false);

  const switchChangeHandler = async (value: boolean) => {
    const resp = await new Promise<boolean>((res) =>
      setTimeout(() => res(value), 2000)
    );

    setActive(resp);
  };

  return (
    <div className={styles.switchContainer}>
      <div className={styles.measurmentSystemContainer}>
        <span>C</span>
        <span>F</span>
      </div>
      <div>
        <Switch
          rotation={90}
          active={active}
          onSwitchChange={switchChangeHandler}
        />
      </div>
    </div>
  );
};
