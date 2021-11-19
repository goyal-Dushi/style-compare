import { useState } from "react";
import { Alert, AlertTitle } from "@mui/material";
import * as Boot from "react-bootstrap";
import CodeBox from "../../components/CodeBox";
import DisplayBox from "../../components/DisplayBox";
import StyleToggleNav from "../../components/StyleToggleNav";
import DescBox from "../../components/DescBox";

export default function AdditionalContent({ id }) {
  const [type, setType] = useState("M");
  let data;
  const getHTML = () => {
    if (type === "M") {
      data = `
    <Alert severity="error">
        <AlertTitle>Error Title</AlertTitle>
        This is an error alert — <strong>error occured</strong>
    </Alert>
    <Alert color="warning">
        <AlertTitle>Warning Title</AlertTitle>
        This is a warning alert — <strong>warning!</strong>
    </Alert>
    `;
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
      data = `
    <Alert>
        <Alert.Heading variant="success" > Success Alert! </Alert.Heading>
        <p> This is Success alert -</p><Alert.Link> success link </Alert.Link>
    </Alert>
    <Alert>
        <Alert.Heading variant="info" > Info Alert! </Alert.Heading>
        <p> This is Info alert -</p><Alert.Link> info link </Alert.Link>
    </Alert>
    `;
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
  return (
    <div id={id}>
      <DescBox
        heading={"Additional Content"}
        content={
          <>
            <b> {"Material"} </b> {"provides with"}
            <span className={"codeSnippet"}>{"<AlertTitle/>"}</span>
            {"component for adding heading/title to the Alert component."}
            <br />
            <b> {"Bootstrap"} </b> {"has two components, namely"}
            <span className={"codeSnippet"}>{"<Alert.Heading/>"}</span>
            {"&"}
            <span className={"codeSnippet"}>{"<Alert.Link/>"}</span>
            {"for adding heading and links to our component."}
          </>
        }
      />
      <StyleToggleNav setStyleType={setType} />
      <DisplayBox> {getHTML()} </DisplayBox>
      <CodeBox snippet={data} />
    </div>
  );
}
