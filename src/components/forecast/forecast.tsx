import React from "react";
import styles from "./styles.module.scss";

const Forecast: React.FC = ({ children }) => {
  return <div className={styles.wrapper}>{children}</div>;
};

export default Forecast;
