import List from '@mui/material/List';
import Paper from '@mui/material/Paper';
import ListItem from '@mui/material/ListItem';
import React, { useState } from 'react';

export default function RightSideNav({ values, scrollRef }) {
  const [selectedText, setSelectedText] = useState(scrollRef[0]);
  const handleOptionSelect = (e, selectedIndex) => {
    setSelectedText(selectedIndex);
  };

  return (
    <Paper
      elevation={2}
      sx={{ width: '300px' }}
      className={'position-fixed mx-auto mt-3 pt-3'}
    >
      <h5 className={'text-center'}>On This Page</h5>
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
    </Paper>
  );
}
