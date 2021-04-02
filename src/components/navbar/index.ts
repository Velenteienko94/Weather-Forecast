import { Navbar } from "./navbar";

export type TDaysProps = {
  currentDay: number;
  days: number;
};

export type TMenuButtonProps = {
  clickHandler: (ev: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
};

export default Navbar;
