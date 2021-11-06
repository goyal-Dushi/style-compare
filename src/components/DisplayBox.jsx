import React from "react";
import styles from "./displaybox.module.css";

function DisplayBox({ children }) {
  return <div className={styles.displayBox}>{children}</div>;
}

export default DisplayBox;
