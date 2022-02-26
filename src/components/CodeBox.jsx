import { Alert, IconButton, Snackbar, Tooltip } from "@mui/material";
import React, { useRef, useState } from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { monokai } from "react-syntax-highlighter/dist/esm/styles/hljs";
import styles from "./codebox.module.css";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";

function CodeBox({ snippet }) {
  const [alert, setAlert] = useState(false);
  const inputRef = useRef();

  const handleAlertClose = (event, reason) => {
    if (reason === "clickaway") {
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
      document.execCommand("copy");
    }
    setAlert(true);
  };

  return (
    <>
      <div className={styles.codebox}>
        <div style={{ position: "relative", width: "100%" }}>
          <Tooltip title={"Copy"} arrow={true} placement={"left"}>
            <IconButton
              onClick={handleCopy}
              aria-label={"copy"}
              style={{ position: "absolute", right: "0" }}
              color={"primary"}
              size={"large"}>
              <ContentCopyIcon />
            </IconButton>
          </Tooltip>
        </div>
        <SyntaxHighlighter
          wrapLongLines={true}
          className={styles.styleHighlighter}
          style={monokai}>
          {snippet}
        </SyntaxHighlighter>
      </div>
      <input style={{ height: 0, opacity: 0 }} value={snippet} ref={inputRef} />
      <Snackbar
        anchorOrigin={{ horizontal: "right", vertical: "top" }}
        autoHideDuration={2000}
        open={alert}
        onClose={handleAlertClose}>
        <Alert variant={"filled"} severity={"success"}>
          {"Copied to Clipboard!"}
        </Alert>
      </Snackbar>
    </>
  );
}

export default CodeBox;
