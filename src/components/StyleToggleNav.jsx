import { IconButton } from "@mui/material";
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
    <div className={styles.styleContainer}>
      {types?.value?.map((item, i) => (
        <IconButton color={"inherit"} onClick={() => toggleStyle(item)} key={i}>
          <img
            className={styles.styleImg}
            height={"35px"}
            width={"35px"}
            src={types?.imgSrc[i]}
            alt={"css-lib-img"}
          />
        </IconButton>
      ))}
    </div>
  );
}

export default StyleToggleNav;
