import React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import ExpandCircleDownIcon from '@mui/icons-material/ExpandCircleDown';

function CodeSandBox() {
  return (
    <div className={'my-2'}>
      <Accordion>
        <AccordionSummary expandIcon={<ExpandCircleDownIcon />}>
          {'Try on CodeSandBox'}
        </AccordionSummary>
        <AccordionDetails>
          <iframe
            src={process.env.REACT_APP_CODESANDBOX_URL}
            style={{
              width: '100%',
              height: '450px',
              border: '1px solid black',
              borderRadius: '4px',
            }}
            title={'codesandbox'}
            allow={
              'accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking'
            }
            sandbox={
              'allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts'
            }
          />
        </AccordionDetails>
      </Accordion>
    </div>
  );
}

export default CodeSandBox;
