import React from "react";
import { useNavigate } from "react-router";
import styles from "./leftSideNav.module.css";

export default function LeftSideNav() {
  let navigate = useNavigate();
  return (
    <>
      <aside className={styles.sideNav}>
        <ul className={`${styles.sideNavContent} w-75 mx-auto`}>
          <li
            onClick={() => {
              navigate("/");
            }}>
            {"Home"}
          </li>
          <li
            onClick={() => {
              navigate("/buttons");
            }}>
            {"Buttons"}
          </li>
          <li
            onClick={() => {
              navigate("/alerts");
            }}>
            {"Alerts"}
          </li>
        </ul>
      </aside>
    </>
  );
}
