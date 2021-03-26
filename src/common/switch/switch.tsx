import { useState } from "react";
import { TSwitchProps } from ".";
import styles from "./styles.module.scss";

export const Switch = ({ rotation = 0 }: TSwitchProps): JSX.Element => {
  const [active, setActive] = useState(false);

  const selectRotation = (): string => {
    if (!rotation) return "";

    return styles[`rotate-${rotation}`];
  };

  return (
    <div
      className={`${styles.switchContainer} ${selectRotation()}`}
      onClick={() => setActive(!active)}
    >
      <div className={styles.switchBackground} />
      <div className={`${styles.switchItem} ${active ? styles.active : ""}`} />
    </div>
  );
};
