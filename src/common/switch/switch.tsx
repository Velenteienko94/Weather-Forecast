import { TSwitchProps } from ".";
import styles from "./styles.module.scss";

export const Switch = ({
  rotation = 0,
  active,
  onSwitchChange,
  disabled,
}: TSwitchProps): JSX.Element => {
  const selectRotation = (): string => {
    if (!rotation) return "";

    return styles[`rotate-${rotation}`];
  };

  const clickHandler = () => {
    !disabled && onSwitchChange(!active);
  };

  return (
    <div
      onClick={clickHandler}
      className={`${styles.switchContainer} ${selectRotation()}`}
    >
      <div className={styles.switchBackground} />
      <div className={`${styles.switchItem} ${active ? styles.active : ""}`} />
    </div>
  );
};
