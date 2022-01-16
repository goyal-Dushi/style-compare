import React, { useState } from "react";
import StyleToggleNav from "../../components/StyleToggleNav";
import DisplayBox from "../../components/DisplayBox";
import CodeBox from "../../components/CodeBox";
import { Alert } from "@mui/material";
import * as Boot from "react-bootstrap";
import DescBox from "../../components/DescBox";
const { content, html } = require("./alerts.json");
const { descContent } = require("../common.json");

export default function AlertColors({ id }) {
  const [type, setType] = useState("M");
  let data;
  const getHTML = () => {
    if (type === "M") {
      data = html.colors.M;
      return (
        <>
          <Alert sx={{ margin: "5px 0px" }} color={"info"}>
            {"Info Color Alert"}
          </Alert>
          <Alert sx={{ margin: "5px 0px" }} color={"warning"}>
            {"Warning Color Alert"}
          </Alert>
          <Alert sx={{ margin: "5px 0px" }} color={"error"}>
            {"Error Color Alert"}
          </Alert>
          <Alert sx={{ margin: "5px 0px" }} color={"success"}>
            {"Color Success"}
          </Alert>
          <br />
          <Alert sx={{ margin: "5px 0px" }} severity={"info"}>
            {"Info Severity Alert"}
          </Alert>
          <Alert sx={{ margin: "5px 0px" }} severity={"warning"}>
            {"Warning Severity Alert"}
          </Alert>
          <Alert sx={{ margin: "5px 0px" }} severity={"error"}>
            {"Error Severity Alert"}
          </Alert>
          <Alert sx={{ margin: "5px 0px" }}>{"Default Success Alert"}</Alert>
        </>
      );
    } else if (type === "B") {
      data = html.colors.B;
      return (
        <>
          <Boot.Alert className={"my-2 mx-2"}>{"Primary Default"}</Boot.Alert>
          <Boot.Alert className={"my-2 mx-2"} variant={"warning"}>
            <i className={"bi-exclamation-triangle-fill me-2"}></i>
            {"Warning Alert"}
          </Boot.Alert>
          <Boot.Alert className={"my-2 mx-2"} variant={"info"}>
            <i className={"bi-info-lg me-2"}></i>
            {"Info Alert"}
          </Boot.Alert>
          <Boot.Alert className={"my-2 mx-2"} variant={"success"}>
            <i className={"bi-check2-circle me-2"}></i>
            {"Success Alert"}
          </Boot.Alert>
          <Boot.Alert className={"my-2 mx-2"} variant={"secondary"}>
            {"Secondary Alert"}
          </Boot.Alert>
          <Boot.Alert className={"my-2 mx-2"} variant={"danger"}>
            {"Danger Alert"}
          </Boot.Alert>
          <Boot.Alert className={"my-2 mx-2"} variant={"light"}>
            {"Light Alert"}
          </Boot.Alert>
          <Boot.Alert className={"my-2 mx-2"} variant={"dark"}>
            {"Dark Alert"}
          </Boot.Alert>
        </>
      );
    }
  };

  const getContent = () => {
    switch (type) {
      case "M":
        return content.colors.M;
      case "B":
        return content.colors.B;
      default:
        return descContent.defaultText;
    }
  };

  return (
    <div id={id}>
      <DescBox heading={"Colors & Icons"} content={getContent()} />
      <StyleToggleNav setStyleType={setType} />
      <DisplayBox> {getHTML()} </DisplayBox>
      <CodeBox snippet={data} />
    </div>
  );
}
