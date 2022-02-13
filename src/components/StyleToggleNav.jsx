import { IconButton, Tooltip } from "@mui/material";
import React, { useContext } from "react";
import { TypeContext } from "../App";
import styles from "./styleToggleNav.module.css";

function StyleToggleNav({ setStyleType }) {
  const types = useContext(TypeContext);
  const toggleStyle = (type) => {
    if (type === "M") {
      setStyleType("M");
    } else if (type === "B") {
      setStyleType("B");
    }
  };
  return (
    <div className={styles.styleContainer}>
      {types?.value?.map((item, i) => (
        <Tooltip arrow={true} placement={"bottom"} title={types?.names?.[i]}>
          <IconButton
            color={"inherit"}
            onClick={() => toggleStyle(item)}
            key={i}>
            <img
              className={styles.styleImg}
              height={"35px"}
              width={"35px"}
              src={types?.imgSrc[i]}
              alt={"css-lib-img"}
            />
          </IconButton>
        </Tooltip>
      ))}
    </div>
  );
}

export default StyleToggleNav;
