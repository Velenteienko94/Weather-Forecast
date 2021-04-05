import { TCurrentStateProps } from "..";
import styles from "./styles.module.scss";

export const CurrentState = ({
  description,
  locationName,
  temperature,
  icon,
}: TCurrentStateProps): JSX.Element => {
  return (
    <div className={styles.currentState}>
      <p>{description}</p>
      <p>{temperature}</p>
      <img src={icon} alt="icon"></img>
      <p>{locationName}</p>
    </div>
  );
};
