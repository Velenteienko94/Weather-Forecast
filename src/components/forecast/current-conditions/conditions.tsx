import { TConditionsProps } from "..";
import List from "../../../common/list";
import styles from "../styles.module.scss";

export const Conditions = ({ conditions }: TConditionsProps): JSX.Element => (
  <List
    className={styles.currentConditions}
    items={Object.values(conditions)}
  />
);
