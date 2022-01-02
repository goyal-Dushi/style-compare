import { Alert } from "@mui/material";
import React, { useState } from "react";
import CodeBox from "../../components/CodeBox";
import DisplayBox from "../../components/DisplayBox";
import StyleToggleNav from "../../components/StyleToggleNav";
import * as Boot from "react-bootstrap";
import DescBox from "../../components/DescBox";
import { content, html } from "./alerts.json";
import { descContent } from "../common.json";

export default function AlertVariants({ id }) {
  const [type, setType] = useState("M");
  let data;
  const getHTML = () => {
    if (type === "M") {
      data = html.variants.M;
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
      data = html.variants.B;
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

  const getContent = () => {
    switch (type) {
      case "M":
        return content.variants.M;
      case "B":
        return content.variants.B;
      default:
        return descContent.defaultText;
    }
  };

  return (
    <div id={id}>
      <DescBox heading={"Variants"} content={getContent()} />
      <StyleToggleNav setStyleType={setType} />
      <DisplayBox> {getHTML()} </DisplayBox>
      <CodeBox snippet={data} />
    </div>
  );
}
