import React, { useContext } from "react";
import { TypeContext } from "../App";
import styles from "./styleToggleNav.module.css";

function StyleToggleNav(props) {
  const types = useContext(TypeContext);
  const toggleStyle = (type) => {
    if (type === "M") {
      props.setStyleType("M");
    } else if (type === "B") {
      props.setStyleType("B");
    }
  };
  return (
    <div className={styles.mainContainer}>
      <div className={styles.styleContainer}>
        {types?.map((item, i) => (
          <button
            onClick={() => toggleStyle(item)}
            key={i}
            className={styles.styleButton}>
            {item}
          </button>
        ))}
      </div>
      <button className={styles.copyButton}>{"Copy"}</button>
    </div>
  );
}

export default StyleToggleNav;
