import React, { useState } from 'react';
import Accordion from 'react-bootstrap/Accordion';
import { useNavigate } from 'react-router-dom';
import styles from './leftSideNav.module.css';

const { options } = require('./leftNavOptions.json');

export default function LeftSideNav() {
  const [selectOption, setSelected] = useState('About');

  const handleOptionClick = (e) => {
    setSelected(e.currentTarget.innerText);
  };

  const navigate = useNavigate();
  return (
    <aside className={styles.sideNav}>
      <ul className={`${styles.sideNavContent} w-75 mx-auto`}>
        <Accordion flush>
          <Accordion.Item eventKey={'0'}>
            <Accordion.Header>
              <li>Getting Started</li>
            </Accordion.Header>
            <Accordion.Body>
              <ul className={'list-group list-group-flush'}>
                {options.start.map((item) => (
                  <li
                    aria-hidden
                    key={item}
                    className={
                      selectOption === item.name
                        ? 'list-group-item list-group-item-action py-2 list-group-item-info'
                        : 'list-group-item list-group-item-action py-2'
                    }
                    onClick={(e) => {
                      navigate(item.link);
                      handleOptionClick(e);
                    }}
                  >
                    {item.name}
                  </li>
                ))}
              </ul>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey={'1'}>
            <Accordion.Header>Components</Accordion.Header>
            <Accordion.Body>
              <ul className={'list-group list-group-flush'}>
                {options.components.map((item) => (
                  <li
                    aria-hidden
                    key={item}
                    className={
                      selectOption === item.name
                        ? 'list-group-item list-group-item-action py-2 list-group-item-info'
                        : 'list-group-item list-group-item-action py-2'
                    }
                    onClick={(e) => {
                      navigate(item.link);
                      handleOptionClick(e);
                    }}
                  >
                    {item.name}
                  </li>
                ))}
              </ul>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </ul>
    </aside>
  );
}
