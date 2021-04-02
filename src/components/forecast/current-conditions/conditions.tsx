import { TConditionsProps } from "..";
import List from "../../../common/list";

export const Conditions = ({ conditions }: TConditionsProps): JSX.Element => (
  <List items={Object.values(conditions)} />
);
