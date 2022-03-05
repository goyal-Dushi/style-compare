import { IconButton, Tooltip } from "@mui/material";
import React, { useContext, useRef } from "react";
import { TypeContext } from "../App";
import styles from "./styleToggleNav.module.css";
const {
  descContent: { defaultLink },
} = require("../modules/common.json");

function StyleToggleNav({ setStyleType, linkTo }) {
  const types = useContext(TypeContext);
  const linkHead = useRef();

  const toggleStyle = (type) => {
    switch (type) {
      case "M":
        setStyleType("M");
        linkHead.current = "Material UI";
        break;
      case "B":
        setStyleType("B");
        linkHead.current = "Bootstrap";
        break;
      default:
        linkHead.current = "";
        break;
    }
  };
  return (
    <>
      <div className={styles.styleContainer}>
        {types?.value?.map((item, i) => (
          <Tooltip
            key={i}
            arrow={true}
            placement={"top-end"}
            title={
              <span style={{ fontSize: "18px" }}>{types?.names?.[i]}</span>
            }>
            <IconButton
              color={"inherit"}
              aria-label={`${types?.names?.[i]}-icon`}
              onClick={() => toggleStyle(item)}>
              {types?.imgSrc[i] ? (
                <img
                  className={styles.styleImg}
                  height={"35px"}
                  width={"35px"}
                  src={types?.imgSrc[i]}
                  alt={"css-lib-img"}
                />
              ) : (
                item
              )}
            </IconButton>
          </Tooltip>
        ))}
      </div>
      <div className={styles.styleLink}>
        {"View on "}
        <a
          target={"_blank"}
          href={linkTo?.current ? linkTo?.current : defaultLink}
          rel={"noreferrer"}>
          {linkHead?.current ? linkHead?.current : "Material UI"}
        </a>
      </div>
    </>
  );
}

export default StyleToggleNav;
