import React from "react";
import Accordion from "react-bootstrap/Accordion";
import { useNavigate } from "react-router";
import styles from "./leftSideNav.module.css";

export default function LeftSideNav() {
  let navigate = useNavigate();
  return (
    <>
      <aside className={styles.sideNav}>
        <ul className={`${styles.sideNavContent} w-75 mx-auto`}>
          <Accordion flush>
            <Accordion.Item eventKey={"0"}>
              <Accordion.Header>
                <li>{"Getting Started"}</li>
              </Accordion.Header>
              <Accordion.Body>
                <li
                  onClick={() => {
                    navigate("/");
                  }}>
                  {"About"}
                </li>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey={"1"}>
              <Accordion.Header>{"Components"}</Accordion.Header>
              <Accordion.Body>
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
                <li
                  onClick={() => {
                    navigate("/chips&badges");
                  }}>
                  {"Chips/Badges"}
                </li>
                <li
                  onClick={() => {
                    navigate("/progress");
                  }}>
                  {"Progress"}
                </li>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </ul>
      </aside>
    </>
  );
}
