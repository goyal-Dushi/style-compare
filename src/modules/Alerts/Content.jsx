import { useState } from "react";
import { Alert, AlertTitle } from "@mui/material";
import * as Boot from "react-bootstrap";
import CodeBox from "../../components/CodeBox";
import DisplayBox from "../../components/DisplayBox";
import StyleToggleNav from "../../components/StyleToggleNav";
import DescBox from "../../components/DescBox";
import { content, html } from "./alerts.json";
import { descContent } from "../common.json";

export default function AdditionalContent({ id }) {
  const [type, setType] = useState("M");
  let data;
  const getHTML = () => {
    if (type === "M") {
      data = html.alertContent.M;
      return (
        <>
          <Alert severity={"error"}>
            <AlertTitle>{"Error Title"}</AlertTitle>
            {"This is an error alert — "}
            <strong>{"error occured"}</strong>
          </Alert>
          <Alert color={"warning"}>
            <AlertTitle>{"Warning Title"}</AlertTitle>
            {"This is a warning alert — "}
            <strong>{"warning!"}</strong>
          </Alert>
        </>
      );
    } else if (type === "B") {
      data = html.alertContent.B;
      return (
        <>
          <Boot.Alert variant={"success"}>
            <Boot.Alert.Heading>Success Alert!</Boot.Alert.Heading>
            <p>
              {"This is Success alert -"}
              <Boot.Alert.Link>{" success link "}</Boot.Alert.Link>
            </p>
          </Boot.Alert>
          <Boot.Alert variant={"info"}>
            <Boot.Alert.Heading>{"Info Alert!"}</Boot.Alert.Heading>
            <p>
              {"This is Info alert -"}
              <Boot.Alert.Link>{" info link"} </Boot.Alert.Link>
            </p>
          </Boot.Alert>
        </>
      );
    }
  };

  const getContent = () => {
    switch (type) {
      case "M":
        return content.alertContent.M;
      case "B":
        return content.alertContent.B;
      default:
        return descContent.defaultText;
    }
  };

  return (
    <div id={id}>
      <DescBox heading={"Additional Content"} content={getContent()} />
      <StyleToggleNav setStyleType={setType} />
      <DisplayBox> {getHTML()} </DisplayBox>
      <CodeBox snippet={data} />
    </div>
  );
}
