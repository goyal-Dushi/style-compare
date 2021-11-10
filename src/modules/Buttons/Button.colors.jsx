import React, { useState } from "react";
import DescBox from "../../components/DescBox";
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
          <Button
            variant={"contained"}
            sx={{ margin: "8px 0px" }}
            color={"primary"}>
            {"Primary Default"}
          </Button>
          <Button
            variant={"contained"}
            sx={{ margin: "8px 0px" }}
            color={"secondary"}>
            {"Secondary"}
          </Button>
          <Button
            variant={"contained"}
            sx={{ margin: "8px 0px" }}
            color={"success"}>
            {"Success"}
          </Button>
          <Button
            variant={"contained"}
            sx={{ margin: "8px 0px" }}
            color={"error"}>
            {"Error"}
          </Button>
          <Button
            variant={"contained"}
            sx={{ margin: "8px 0px" }}
            color={"info"}>
            {"Info"}
          </Button>
          <Button
            variant={"contained"}
            sx={{ margin: "8px 0px" }}
            color={"warning"}>
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
          <Bootstrap.Button className={"mt-2 mb-2"} variant={"success"}>
            {"Success"}
          </Bootstrap.Button>
          <Bootstrap.Button className={"mt-2 mb-2"} variant={"danger"}>
            {"Danger"}
          </Bootstrap.Button>
          <Bootstrap.Button className={"mt-2 mb-2"} variant={"warning"}>
            {"Warning"}
          </Bootstrap.Button>
          <Bootstrap.Button className={"mt-2 mb-2"} variant={"info"}>
            {"Info"}
          </Bootstrap.Button>
          <Bootstrap.Button className={"mt-2 mb-2"} variant={"light"}>
            {"Light"}
          </Bootstrap.Button>
          <Bootstrap.Button className={"mt-2 mb-2"} variant={"dark"}>
            {"Dark"}
          </Bootstrap.Button>
        </>
      );
    }
  };
  return (
    <>
      <DescBox
        heading={"Color"}
        content={
          <>
            {"For applying color to your button, in"} <b> {"Material"} </b>
            {"you can use "}
            <span className={"codeSnippet"}>{"color"}</span>
            {"property whereas in"} <b> {"Bootstrap"} </b>
            <span className={"codeSnippet"}>{"variant"}</span> {"is used."}
          </>
        }
      />
      <StyleToggleNav setStyleType={setType} />
      <DisplayBox>{getHTML()}</DisplayBox>
      <CodeBox snippet={data} />
    </>
  );
}

export default ButtonColors;
