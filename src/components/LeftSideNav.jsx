import React, { useEffect, useState } from 'react';
import Accordion from '@mui/material/Accordion';
import { useNavigate } from 'react-router-dom';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const { options } = require('./leftNavOptions.json');

export default function LeftSideNav() {
  const [optionIndex, setOptionIndex] = useState();
  const navigate = useNavigate();

  const handleOptionClick = (e, optionName) => {
    setOptionIndex(optionName);
  };

  useEffect(() => {
    navigate('/');
    setOptionIndex('About');
  }, []);

  return (
    <aside className={'position-fixed mx-auto mt-3'} style={{ width: '300px' }}>
      <Accordion defaultExpanded disableGutters>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          {'Getting Started'}
        </AccordionSummary>
        <AccordionDetails>
          <List>
            {options.start.map((item) => (
              <ListItemButton
                selected={optionIndex === item.name}
                onClick={(e) => {
                  navigate(item.link);
                  handleOptionClick(e, item.name);
                }}
                key={item.name}
              >
                {item.name}
              </ListItemButton>
            ))}
          </List>
        </AccordionDetails>
      </Accordion>
      <Accordion disableGutters>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          {'Components'}
        </AccordionSummary>
        <AccordionDetails>
          <List>
            {options.components.map((item) => (
              <ListItemButton
                selected={optionIndex === item.name}
                key={item.name}
                onClick={(e) => {
                  navigate(item.link);
                  handleOptionClick(e, item.name);
                }}
              >
                {item.name}
              </ListItemButton>
            ))}
          </List>
        </AccordionDetails>
      </Accordion>
    </aside>
  );
}
