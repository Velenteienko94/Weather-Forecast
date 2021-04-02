import { TMenuButtonProps } from ".";
import { BurgerIcon } from "./icons";
import styles from "./styles.module.scss";

export const MenuButton = ({ clickHandler }: TMenuButtonProps): JSX.Element => {
  return (
    <button onClick={clickHandler}>
      <BurgerIcon className={styles.burger} />
    </button>
  );
};
