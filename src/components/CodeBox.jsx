import { IconButton, Snackbar, Tooltip } from "@mui/material";
import React, { useState } from "react";
import CopyToClipboard from "react-copy-to-clipboard";
import SyntaxHighlighter from "react-syntax-highlighter";
import { monokai } from "react-syntax-highlighter/dist/esm/styles/hljs";
import styles from "./codebox.module.css";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";

function CodeBox({ snippet }) {
  const [alert, setAlert] = useState(false);
  const handleAlertClose = (event, reason) => {
    if (reason === "clickaway") {
      setAlert(false);
      return;
    }
    setAlert(false);
  };
  return (
    <>
      <div className={styles.codebox}>
        <CopyToClipboard
          text={snippet}
          onCopy={(text, result) => (result ? setAlert(true) : null)}>
          <div style={{ position: "relative", width: "100%" }}>
            <Tooltip title={"Copy"} arrow={true} placement={"left"}>
              <IconButton
                aria-label={"copy"}
                style={{ position: "absolute", right: "0" }}
                color={"primary"}
                size={"large"}>
                <ContentCopyIcon />
              </IconButton>
            </Tooltip>
          </div>
        </CopyToClipboard>
        <SyntaxHighlighter className={styles.styleHighlighter} style={monokai}>
          {snippet}
        </SyntaxHighlighter>
      </div>
      <Snackbar
        anchorOrigin={{ horizontal: "center", vertical: "bottom" }}
        autoHideDuration={2000}
        message={"Code copied to Clipboard!"}
        open={alert}
        onClose={handleAlertClose}
      />
    </>
  );
}

export default CodeBox;
