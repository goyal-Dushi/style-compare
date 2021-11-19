import React, { useState } from "react";
import { Button } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import PrintIcon from "@mui/icons-material/Print";
import * as Boot from "react-bootstrap";
import StyleToggleNav from "../../components/StyleToggleNav";
import DisplayBox from "../../components/DisplayBox";
import CodeBox from "../../components/CodeBox";
import DescBox from "../../components/DescBox";

export default function WithIcons({ id }) {
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
    <Button variant={"primary"}>
      {"Send"} <i className={"bi-send"}></i>
    </Button>
    <Button variant={"outline-info"}>
      <i className={"bi-printer"}></i> {"Print"}
    </Button>  
    `;
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
  return (
    <div id={id}>
      <DescBox
        heading={"With Icons"}
        content={
          <>
            {"For"} <b> {"Material"} </b> {"we have lib as"}
            <span className={"codeSnippet"}>{"@mui/icons-material"}</span>
            {
              "used for importing material icon component. It provides a Button attributes as"
            }
            <span className={"codeSnippet"}> {"endIcon"} </span> {"&"}
            <span className={"codeSnippet"}>{"startIcon"}</span>
            {
              "to place the icons at the end or start of the button respectively"
            }
            <br />
            {"In"} <b> {"Bootstrap,"} </b>
            <span className={"codeSnippet"}>{"bootstrap-icons"}</span>
            {"is the lib for using bootstrap icons via classes provided to the"}
            <span className={"codeSnippet"}>{"<i></i>"}</span>
            {
              "tags. You need to place them manually where you want your icon to occur."
            }
          </>
        }
      />
      <StyleToggleNav setStyleType={setType} />
      <DisplayBox> {getHTML()} </DisplayBox>
      <CodeBox snippet={data} />
    </div>
  );
}
