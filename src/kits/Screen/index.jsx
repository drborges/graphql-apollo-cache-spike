import React from "react";

import styles from "./styles.module.scss";

const Screen = ({ children, title }) => {
  return <div className={styles.screen}>{children}</div>;
};

export default Screen;
