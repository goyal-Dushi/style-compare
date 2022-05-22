import React, { useEffect, useState } from 'react';
import Accordion from '@mui/material/Accordion';
import { useNavigate } from 'react-router-dom';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Paper, styled } from '@mui/material';

const { options } = require('./leftNavOptions.json');

const CustomPaper = styled(Paper, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  paddingTop: theme.spacing(10),
  [theme.breakpoints.down('md')]: {
    display: 'none',
    overflowX: 'hidden',
    ...(open && {
      display: 'block',
      zIndex: '10',
      transition: theme.transitions.create('transform', {
        transition: theme.transitions.easing.easeIn,
        duration: theme.transitions.duration.enteringScreen,
      }),
      transform: 'scaleX(1)',
    }),
  },
}));

export default function LeftSideNav(props) {
  const [optionIndex, setOptionIndex] = useState();
  const { navOpen, toggleNav } = props;
  const navigate = useNavigate();

  const handleOptionClick = (e, optionName) => {
    setOptionIndex(optionName);
    toggleNav();
  };

  useEffect(() => {
    navigate('/');
    setOptionIndex('About');
  }, []);

  return (
    <CustomPaper
      open={navOpen}
      className={'position-sticky border-end border-secondary top-0 vh-100'}
    >
      <aside className={'w-auto'}>
        <Accordion defaultExpanded>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            {'Getting Started'}
          </AccordionSummary>
          <AccordionDetails className={'ps-0'}>
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
                  <span style={{ wordWrap: 'break-word' }}> {item.name} </span>
                </ListItemButton>
              ))}
            </List>
          </AccordionDetails>
        </Accordion>
        <Accordion disableGutters>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            {'Components'}
          </AccordionSummary>
          <AccordionDetails className={'ps-0'}>
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
    </CustomPaper>
  );
}
