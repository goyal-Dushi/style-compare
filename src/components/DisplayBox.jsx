import React from "react";
import styles from "./displaybox.module.css";

function DisplayBox({ show }) {
  return <div className={styles.displayBox}>{show}</div>;
}

export default DisplayBox;
