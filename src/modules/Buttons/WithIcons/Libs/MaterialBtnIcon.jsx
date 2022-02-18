import React from "react";
import { Button } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import PrintIcon from "@mui/icons-material/Print";

export default function MaterialBtnIcon() {
  return (
    <>
      <Button endIcon={<SendIcon />} variant={"contained"}>
        {"Send"}
      </Button>
      <Button startIcon={<PrintIcon />} variant={"outlined"} color={"info"}>
        {"Print"}
      </Button>
    </>
  );
}
