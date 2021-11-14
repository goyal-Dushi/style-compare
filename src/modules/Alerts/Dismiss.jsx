import { Alert, Button } from "@mui/material";
import * as Boot from "react-bootstrap";
import { useState } from "react";
import CodeBox from "../../components/CodeBox";
import DisplayBox from "../../components/DisplayBox";
import StyleToggleNav from "../../components/StyleToggleNav";
import DescBox from "../../components/DescBox";

export default function DismissAlert() {
  const [type, setType] = useState("M");
  const [open, setOpen] = useState(true);
  const [open2, setOpen2] = useState(true);
  let data = "";
  const getHTML = () => {
    if (type === "M") {
      data = `
    {open ? ( <Alert onClose={() => { setOpen(false) }}> Dismissible Alert </Alert> ) : null}
    <Button className="mx-2" variant="outlined" onClick={() => setOpen(true)} color="primary">
        Open Alert
    </Button>

    open2 ? ( 
    <Alert
        action={ <Button color="inherit" size="small" onClick={() => setOpen2(false)}> CLOSE </Button> }>
        Dismissible Alert
    </Alert>
    ) : null}
    <Button className="mx-2" variant="outlined" onClick={() => setOpen2(true)} color="primary">
        pen Alert
    </Button>
    `;
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
      data = `
    {open ? (
    <Alert variant='danger' onClose={() => setOpen(false)} dismissible >
        <Alert.Heading> Oh snap! You got an error! </Alert.Heading>
        <p> Change this and that and try again. Duis mollis, est non commodo </p>
    </Alert>
    ) : null}
    <Button onClick={() => { setOpen(true) }} variant="outline-primary mx-2" size="sm">
        OPEN
    </Button>
    `;
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
  return (
    <>
      <DescBox
        heading={"Dismiss Alert"}
        content={
          <>
            {"In"} <b> {"Material"} </b> {"an alert can have an"}
            <span className='codeSnippet'>{"action"}</span>
            {", such as a close button. If an"}
            <span className='codeSnippet'>{"onClose"}</span>
            {"prop is set and no"}
            <span className='codeSnippet'>{"action"}</span>
            {"props is there, then a"}
            <span className='codeSnippet'>{"close"}</span>
            {
              "icon is displayed by default, else you can provide your custom icon or button in action."
            }
            <br />
            <b> {"Bootstrap"} </b> {"allows you to set"}
            <span className='codeSnippet'>{"dismissible"}</span>
            {
              "props to your alert and displays a close icon by default. Further functionality is displayed in code using"
            }
            <span className='codeSnippet'>
              {"const [open,setOpen] = useState"}
            </span>
            {", react hooks."}
          </>
        }
      />
      <StyleToggleNav setStyleType={setType} />
      <DisplayBox> {getHTML()} </DisplayBox>
      <CodeBox snippet={data} />
    </>
  );
}
