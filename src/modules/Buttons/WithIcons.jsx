import React, { useState } from "react";
import { Button } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import PrintIcon from "@mui/icons-material/Print";
import * as Boot from "react-bootstrap";
import StyleToggleNav from "../../components/StyleToggleNav";
import DisplayBox from "../../components/DisplayBox";
import CodeBox from "../../components/CodeBox";
import DescBox from "../../components/DescBox";
import { content, html } from "./buttons.json";

export default function WithIcons({ id }) {
  const [type, setType] = useState("M");
  let data;
  const getHTML = () => {
    if (type === "M") {
      data = html.icons.M;
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
      data = html.icons.B;
      return (
        <>
          <Boot.Button variant={"primary"}>
            {"Send"} <i className={"bi-send"}></i>
          </Boot.Button>
          <Boot.Button variant={"outline-info"}>
            <i className={"bi-printer"}></i> {"Print"}
          </Boot.Button>
        </>
      );
    }
  };
  const getContent = () => {
    if (type === "M") {
      return content.icons.M;
    } else if (type === "B") {
      return content.icons.B;
    }
  };
  return (
    <div id={id}>
      <DescBox heading={"With Icons"} content={getContent()} />
      <StyleToggleNav setStyleType={setType} />
      <DisplayBox> {getHTML()} </DisplayBox>
      <CodeBox snippet={data} />
    </div>
  );
}
