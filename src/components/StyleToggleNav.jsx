import React from "react";
import styles from "./styleToggleNav.module.css";

function StyleToggleNav(props) {
  return (
    <div className={styles.mainContainer}>
      <div className={styles.styleContainer}>
        {props?.types?.map((item, i) => (
          <button key={i} className={styles.styleButton}>
            {item}
          </button>
        ))}
      </div>
      <button className={styles.copyButton}>{"Copy"}</button>
    </div>
  );
}

export default StyleToggleNav;
