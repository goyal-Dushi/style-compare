import React, { useState } from "react";
import StyleToggleNav from "../../components/StyleToggleNav";
import DisplayBox from "../../components/DisplayBox";
import CodeBox from "../../components/CodeBox";
import { Alert } from "@mui/material";
import * as Boot from "react-bootstrap";
import DescBox from "../../components/DescBox";

export default function AlertColors() {
  const [type, setType] = useState("M");
  let data;
  const getHTML = () => {
    if (type === "M") {
      data = `
    <Alert color={"info"}> {"Info Color Alert"} </Alert>
    <Alert color={"warning"}> {"Warning Color Alert"} </Alert>
    <Alert color={"error"}> {"Error Color Alert"} </Alert>
    <Alert color={"success"}> {"Color Success"} </Alert>

    <Alert severity={"info"}> {"Info Severity Alert"} </Alert>
    <Alert severity={"warning"}> {"Warning Severity Alert"} </Alert>
    <Alert severity={"error"}> {"Error Severity Alert"} </Alert>
    <Alert > {"Default success Alert"} </Alert>
    `;
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
      data = `
    <Alert> {"Primary Default"} </Alert>
    <Alert variant={"warning"} > <i className={"bi-exclamation-triangle-fill me-2"}></i> {"Warning Alert"} </Alert>
    <Alert variant={"info"} > <i className={"bi-info-lg me-2"}></i> {"Info Alert"} </Alert>
    <Alert variant={"success"} > <i className={"bi-check2-circle me-2"}></i> {"Success Alert"} </Alert>
    <Alert variant={"secondary"} > {"Secondary Alert"} </Alert>
    <Alert variant={"danger"} > {"Danger Alert"} </Alert>
    <Alert variant={"light"} > {"Light Alert"} </Alert>
    <Alert variant={"dark"} > {"Dark Alert"} </Alert>
    `;
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
  return (
    <>
      <DescBox
        heading={"Colors & Icons"}
        content={
          <>
            <b> {"Material"} </b>
            {
              "provides alerts box in four colors as you can see in the below display box."
            }
            <span className={"codeSnippet"}>{"severity"}</span>
            {"prop not only gives color to the Alert component, but sets an"}
            <span className={"codeSnippet"}>{"icon"}</span>
            {"as well as per the severity value."}
            <span className={"codeSnippet"}>{"color"}</span>
            {
              "property can also be used, but by default it sets the icon for its values as"
            }
            <span className={"codeSnippet"}>{"checkCircleOutline"}</span>
            {". Thus you can remove or override icon using the "}
            <span className={"codeSnippet"}>{"icon"}</span> {"prop. Set it to"}
            <span className={"codeSnippet"}>{"false"}</span>{" "}
            {"to remove icon or specify some other material icon."}
            <br />
            <br />
            <b> {"Bootstrap"} </b>
            {
              "provides a variety of colors for their Alert box which can be applied using its"
            }
            <span className={"codeSnippet"}>{"variant"}</span>
            {"prop. By default, its variant props has"}
            <span className={"codeSnippet"}>{"primary"}</span>
            {
              "value. Also, bootstrap dosen't apply any icons to its Alert by default. You have to use"
            }
            <span className={"codeSnippet"}>{"bootstrap-icons"}</span>
            {"with the"}
            <span className={"codeSnippet"}>{"<i></i>"}</span>
            {
              "tags as shown below in order to include icons alongwith alert content."
            }
          </>
        }
      />
      <StyleToggleNav setStyleType={setType} />
      <DisplayBox> {getHTML()} </DisplayBox>
      <CodeBox snippet={data} />
    </>
  );
}
