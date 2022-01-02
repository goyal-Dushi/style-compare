import { Alert, Button } from "@mui/material";
import * as Boot from "react-bootstrap";
import { useState } from "react";
import CodeBox from "../../components/CodeBox";
import DisplayBox from "../../components/DisplayBox";
import StyleToggleNav from "../../components/StyleToggleNav";
import DescBox from "../../components/DescBox";
import { content, html } from "./alerts.json";
import { descContent } from "../common.json";

export default function DismissAlert({ id }) {
  const [type, setType] = useState("M");
  const [open, setOpen] = useState(true);
  const [open2, setOpen2] = useState(true);
  let data = "";
  const getHTML = () => {
    if (type === "M") {
      data = html.dismissable.M;
      return (
        <>
          <div className={"d-flex w-100 mb-2"}>
            {open ? (
              <Alert
                onClose={() => {
                  setOpen(false);
                }}>
                {"Dismissible Alert"}
              </Alert>
            ) : null}
            <Button
              className={"mx-2"}
              variant={"outlined"}
              onClick={() => setOpen(true)}
              color={"primary"}>
              {"Open Alert"}
            </Button>
          </div>
          <div className={"d-flex w-100"}>
            {open2 ? (
              <Alert
                action={
                  <Button
                    color={"inherit"}
                    size={"small"}
                    onClick={() => setOpen2(false)}>
                    {"CLOSE"}
                  </Button>
                }>
                {"Dismissible Alert"}
              </Alert>
            ) : null}
            <Button
              className={"mx-2"}
              variant={"outlined"}
              onClick={() => setOpen2(true)}
              color={"primary"}>
              {"Open Alert"}
            </Button>
          </div>
        </>
      );
    } else if (type === "B") {
      data = html.dismissable.B;
      return (
        <>
          <div className='w-100 d-flex'>
            {open ? (
              <Boot.Alert
                variant='danger'
                onClose={() => setOpen(false)}
                dismissible>
                <Boot.Alert.Heading>
                  {"Oh snap! You got an error!"}
                </Boot.Alert.Heading>
                <p>
                  {
                    "Change this and that and try again. Duis mollis, est non commodo"
                  }
                </p>
              </Boot.Alert>
            ) : null}
            <Boot.Button
              onClick={() => {
                setOpen(true);
              }}
              variant={"outline-primary mx-2"}
              style={{ height: "fit-content" }}>
              {"OPEN"}
            </Boot.Button>
          </div>
        </>
      );
    }
  };

  const getContent = () => {
    switch (type) {
      case "M":
        return content.dismissable.M;
      case "B":
        return content.dismissable.B;
      default:
        return descContent.defaultText;
    }
  };

  return (
    <div id={id}>
      <DescBox heading={"Dismiss Alert"} content={getContent()} />
      <StyleToggleNav setStyleType={setType} />
      <DisplayBox> {getHTML()} </DisplayBox>
      <CodeBox snippet={data} />
    </div>
  );
}
