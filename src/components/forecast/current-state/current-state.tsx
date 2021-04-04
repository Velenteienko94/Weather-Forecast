import { TCurrentStateProps } from "..";
import styles from "../styles.module.scss";

export const CurrentState = ({
  description,
  locationName,
  temperature,
}: TCurrentStateProps): JSX.Element => {
  return (
    <div className={styles.currentState}>
      <p>{description}</p>
      <p>{temperature}</p>
      <p>{locationName}</p>
    </div>
  );
};
