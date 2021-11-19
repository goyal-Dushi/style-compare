import { Alert } from "@mui/material";
import React, { useState } from "react";
import CodeBox from "../../components/CodeBox";
import DisplayBox from "../../components/DisplayBox";
import StyleToggleNav from "../../components/StyleToggleNav";
import * as Boot from "react-bootstrap";
import DescBox from "../../components/DescBox";

export default function AlertVariants({ id }) {
  const [type, setType] = useState("M");
  let data;
  const getHTML = () => {
    if (type === "M") {
      data = `
    <Alert> {"Default Standard variant"} </Alert>
    <Alert variant={"filled"} severity={"info"}> {"Filled"} </Alert>
    <Alert variant={"outlined"} severity={"warning"}> {"Outlined"} </Alert>
    `;
      return (
        <>
          <Alert> {"Default Standard variant"} </Alert>
          <Alert variant={"filled"} severity={"info"}>
            {"Filled"}
          </Alert>
          <Alert variant={"outlined"} severity={"warning"}>
            {"Outlined"}
          </Alert>
        </>
      );
    } else if (type === "B") {
      data = `
    <Alert> {"Default Bootstrap Alert"} </Alert>
    <Alert style={{ border: "2px solid #084298", background: "none" }} variant={"outline-success"} > {"Success Outline"} </Alert>
    `;
      return (
        <>
          <Boot.Alert>{"Default Bootstrap Alert"}</Boot.Alert>
          <Boot.Alert
            style={{ border: "2px solid #0f5132", background: "none" }}
            variant={"success"}>
            {"Inline Style Outline Success"}
          </Boot.Alert>
        </>
      );
    }
  };
  return (
    <div id={id}>
      <DescBox
        heading={"Variants"}
        content={
          <>
            <b> {"Material"} </b> {"provides variety of variants from which"}
            <span className={"codeSnippet"}> {"standard"} </span>
            {"is the"} <span className={"codeSnippet"}>{"default"}</span>
            {"one."}
            <br />
            <b> {"Bootstrap"} </b>
            {
              "dosen't provide any other Alert variants other than its standard filled Alert. But you can customize them by providing"
            }
            <span className={"codeSnippet"}>{"inline styles"}</span>
            {"or"} <span className={"codeSnippet"}>{"overriding"}</span>
            {"bootstrap classes."}
          </>
        }
      />
      <StyleToggleNav setStyleType={setType} />
      <DisplayBox> {getHTML()} </DisplayBox>
      <CodeBox snippet={data} />
    </div>
  );
}
