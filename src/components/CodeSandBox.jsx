import React from 'react';
import { Accordion } from 'react-bootstrap';

function CodeSandBox({ show }) {
  if (show) {
    return (
      <div style={{ margin: '10px 40px' }}>
        <Accordion>
          <Accordion.Item eventKey={'0'}>
            <Accordion.Header> {'Try on CodeSandBox'} </Accordion.Header>
            <Accordion.Body>
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
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </div>
    );
  }
  return <></>;
}

export default CodeSandBox;
