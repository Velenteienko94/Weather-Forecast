import { Switch } from "./switch";

export type TSwitchChangeHandler = (value: boolean) => void;

export type TSwitchProps = {
  active: boolean;
  onSwitchChange: TSwitchChangeHandler;
  rotation: 0 | 90 | 180 | 270 | 360;
  disabled?: boolean;
};

export default Switch;
