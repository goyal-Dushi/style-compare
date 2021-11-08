import React, { useState } from "react";
import { Button } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import PrintIcon from "@mui/icons-material/Print";
import * as Boot from "react-bootstrap";
import StyleToggleNav from "../../components/StyleToggleNav";
import DisplayBox from "../../components/DisplayBox";
import CodeBox from "../../components/CodeBox";

export default function WithIcons() {
  const [type, setType] = useState("M");
  let data;
  const getHTML = () => {
    if (type === "M") {
      data = `
    <Button endIcon={<SendIcon />} variant={"contained"}>
        {"Send"}
    </Button>
    <Button startIcon={<PrintIcon />} variant={"outlined"} color={"info"}>
        {"Print"}
    </Button> 
        `;
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
    } else if (type === "B") {
      data = `
    <Boot.Button variant={"primary"}>
        {"Send"} <SendIcon />
    </Boot.Button>
    <Boot.Button variant={"outline-info"}>
        <PrintIcon /> {"Print"}
    </Boot.Button>   
    `;
      return (
        <>
          <Boot.Button variant={"primary"}>
            {"Send"} <SendIcon />
          </Boot.Button>
          <Boot.Button variant={"outline-info"}>
            <PrintIcon /> {"Print"}
          </Boot.Button>
        </>
      );
    }
  };
  return (
    <>
      <StyleToggleNav setStyleType={setType} />
      <DisplayBox> {getHTML()} </DisplayBox>
      <CodeBox snippet={data} />
    </>
  );
}
