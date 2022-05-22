import List from '@mui/material/List';
import Paper from '@mui/material/Paper';
import ListItem from '@mui/material/ListItem';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import React, { useState } from 'react';
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  styled,
  useMediaQuery,
} from '@mui/material';

const RightNavPaper = styled(Paper)(({ theme }) => ({
  marginTop: theme.spacing(10),
}));

function ParentWrapper({ smallScreen, children }) {
  if (smallScreen) {
    return (
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          {'View on this page'}
        </AccordionSummary>
        <AccordionDetails>{children}</AccordionDetails>
      </Accordion>
    );
  }

  return (
    <RightNavPaper elevation={2} className={'position-fixed w-auto mx-auto'}>
      <h5 className={'text-center mt-2'}>On This Page</h5>
      {children}
    </RightNavPaper>
  );
}

export default function RightSideNav({ values, scrollRef }) {
  const [selectedText, setSelectedText] = useState(scrollRef[0]);
  const smallScreen600 = useMediaQuery('max-width: 600px');
  const handleOptionSelect = (e, selectedIndex) => {
    setSelectedText(selectedIndex);
  };

  return (
    <ParentWrapper smallScreen={smallScreen600}>
      <List>
        {values?.map((item, i) => (
          <a key={item} style={{ textDecoration: 'none' }} href={scrollRef[i]}>
            <ListItem
              onClick={(e) => {
                handleOptionSelect(e, scrollRef[i]);
              }}
              selected={selectedText === scrollRef[i]}
            >
              {item}
            </ListItem>
          </a>
        ))}
      </List>
    </ParentWrapper>
  );
}
