import React from "react";
import { useState } from "react";
import Accordion from "react-bootstrap/Accordion";
import { useNavigate } from "react-router";
import styles from "./leftSideNav.module.css";
import { options } from "./leftNavOptions.json";

export default function LeftSideNav({ responsiveExpanded, toggleResponsiveNav }) {
  const [selectOption, setSelected] = useState("About");

  const handleOptionClick = (e) => {
    console.log(e.currentTarget.innerText);
    setSelected(e.currentTarget.innerText);
  };

  const toggleResponsive = () => {
    toggleResponsiveNav();
  }
  
  let navigate = useNavigate();
  return (
    <>
      <aside className={styles.sideNav}>
        <ul className={`${styles.sideNavContent}${ responsiveExpanded ? '' : ` ${styles.collapsed}`} w-75 mx-auto`} >
          <Accordion className={styles.accordion} flush>
            <Accordion.Item eventKey={"0"}>
              <Accordion.Header>
                <li>{"Getting Started"}</li>
              </Accordion.Header>
              <Accordion.Body>
                <ul className='list-group list-group-flush'>
                  {options.start.map((item, i) => {
                    return (
                      <li
                        key={i}
                        className={
                          selectOption === item.name
                            ? "list-group-item list-group-item-action py-2 list-group-item-info"
                            : "list-group-item list-group-item-action py-2"
                        }
                        onClick={(e) => {
                          toggleResponsive();
                          navigate(item.link);
                          handleOptionClick(e);
                        }}>
                        {item.name}
                      </li>
                    );
                  })}
                </ul>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey={"1"}>
              <Accordion.Header>{"Components"}</Accordion.Header>
              <Accordion.Body>
                <ul className='list-group list-group-flush'>
                  {options.components.map((item, i) => {
                    return (
                      <li
                        key={i}
                        className={
                          selectOption === item.name
                            ? "list-group-item list-group-item-action py-2 list-group-item-info"
                            : "list-group-item list-group-item-action py-2"
                        }
                        onClick={(e) => {
                          toggleResponsive();
                          navigate(item.link);
                          handleOptionClick(e);
                        }}>
                        {item.name}
                      </li>
                    );
                  })}
                </ul>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </ul>
      </aside>
    </>
  );
}
