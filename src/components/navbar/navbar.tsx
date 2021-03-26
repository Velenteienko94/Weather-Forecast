import { Days } from "./days";
import { MenuButton } from "./menu-btn";
import styles from "./styles.module.scss";
import { TemperatureMeasurment } from "./temperature";

export const Navbar = (): JSX.Element => {
  const handler = () => console.log("FOO");

  return (
    <nav className={styles.navbar}>
      <MenuButton clickHandler={handler} />
      <Days currentDay={0} days={3} />
      <TemperatureMeasurment />
    </nav>
  );
};
