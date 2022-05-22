import Alert from '@mui/material/Alert';
import IconButton from '@mui/material/IconButton';
import Snackbar from '@mui/material/Snackbar';
import Tooltip from '@mui/material/Tooltip';
import React, { useRef, useState } from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { monokai } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';

function CodeBox({ snippet }) {
  const [alert, setAlert] = useState(false);
  const inputRef = useRef();

  const handleAlertClose = (event, reason) => {
    if (reason === 'clickaway') {
      setAlert(false);
      return;
    }
    setAlert(false);
  };

  const handleCopy = () => {
    if (window?.navigator?.clipboard) {
      window.navigator.clipboard.writeText(snippet);
    } else {
      inputRef?.current?.select();
      document.execCommand('copy');
    }
    setAlert(true);
  };

  return (
    <>
      <div className={'position-relative'}>
        <Tooltip title={'Copy'} arrow placement={'left'}>
          <IconButton
            onClick={handleCopy}
            aria-label={'copy'}
            style={{ right: 0 }}
            className={'position-absolute'}
            color={'primary'}
            size={'large'}
          >
            <ContentCopyIcon />
          </IconButton>
        </Tooltip>
      </div>
      <SyntaxHighlighter
        wrapLongLines
        className={'p-0 border-none rounded'}
        style={monokai}
      >
        {snippet}
      </SyntaxHighlighter>
      <input
        style={{ height: 0, opacity: 0 }}
        readOnly
        value={snippet}
        ref={inputRef}
      />
      <Snackbar
        anchorOrigin={{ horizontal: 'right', vertical: 'top' }}
        autoHideDuration={2000}
        open={alert}
        onClose={handleAlertClose}
      >
        <Alert variant={'filled'} severity={'success'}>
          Copied to Clipboard!
        </Alert>
      </Snackbar>
    </>
  );
}

export default CodeBox;
