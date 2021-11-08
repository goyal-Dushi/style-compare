import React, { useState } from "react";
import CodeBox from "../../components/CodeBox";
import DisplayBox from "../../components/DisplayBox";
import StyleToggleNav from "../../components/StyleToggleNav";
import { Button } from "@mui/material";
import * as Bootstrap from "react-bootstrap";

function ButtonColors() {
  const [type, setType] = useState("M");
  console.log("Button module");
  let data;
  const getHTML = () => {
    if (type === "M") {
      data = `
      <Button variant={"contained"} color={"primary"} > {"Primary Default"} </Button>
      <Button variant={"contained"} color={"secondary"} > {"Secondary"} </Button>
      <Button variant={"contained"} color={"success"} > {"Success"} </Button>
      <Button variant={"contained"} color={"error"} > {"Error"} </Button>
      <Button variant={"contained"} color={"info"} > {"Info"} </Button>
      <Button variant={"contained"} color={"warning"} > {"Warning"} </Button>
      `;
      return (
        <>
          <Button variant={"contained"} color={"primary"}>
            {"Primary Default"}
          </Button>
          <Button variant={"contained"} color={"secondary"}>
            {"Secondary"}
          </Button>
          <Button variant={"contained"} color={"success"}>
            {"Success"}
          </Button>
          <Button variant={"contained"} color={"error"}>
            {"Error"}
          </Button>
          <Button variant={"contained"} color={"info"}>
            {"Info"}
          </Button>
          <Button variant={"contained"} color={"warning"}>
            {"Warning"}
          </Button>
        </>
      );
    } else if (type === "B") {
      data = `
      <Button variant={"primary"} > {"Primary Default"} </Button>
      <Button variant={"secondary"} > {"Secondary"} </Button>
      <Button variant={"success"} > {"Success"} </Button>
      <Button variant={"danger"} > {"Danger"} </Button>
      <Button variant={"warning"} > {"Warning"} </Button>
      <Button variant={"info"} > {"Info"} </Button>
      <Button variant={"light"} > {"Light"} </Button>
      <Button variant={"dark"} > {"Dark"} </Button>
      `;
      return (
        <>
          <Bootstrap.Button variant={"primary"}>
            {"Primary Default"}
          </Bootstrap.Button>
          <Bootstrap.Button variant={"secondary"}>
            {"Secondary"}
          </Bootstrap.Button>
          <Bootstrap.Button variant={"success"}> {"Success"} </Bootstrap.Button>
          <Bootstrap.Button variant={"danger"}> {"Danger"} </Bootstrap.Button>
          <Bootstrap.Button variant={"warning"}> {"Warning"} </Bootstrap.Button>
          <Bootstrap.Button variant={"info"}> {"Info"} </Bootstrap.Button>
          <Bootstrap.Button variant={"light"}> {"Light"} </Bootstrap.Button>
          <Bootstrap.Button variant={"dark"}> {"Dark"} </Bootstrap.Button>
        </>
      );
    }
  };
  return (
    <>
      <StyleToggleNav setStyleType={setType} />
      <DisplayBox>{getHTML()}</DisplayBox>
      <CodeBox snippet={data} />
    </>
  );
}

export default ButtonColors;
