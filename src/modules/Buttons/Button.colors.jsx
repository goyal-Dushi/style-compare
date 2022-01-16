import React, { useState } from "react";
import DescBox from "../../components/DescBox";
import CodeBox from "../../components/CodeBox";
import DisplayBox from "../../components/DisplayBox";
import StyleToggleNav from "../../components/StyleToggleNav";
import { Button } from "@mui/material";
import * as Bootstrap from "react-bootstrap";
const { content, html } = require("./buttons.json");
const { descContent } = require("../common.json");

function ButtonColors({ id }) {
  const [type, setType] = useState("M");
  let data;
  const getHTML = () => {
    if (type === "M") {
      data = html.colors.M;
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
      data = html.colors.B;
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
      <DescBox heading={"Color"} content={getContent()} />
      <StyleToggleNav setStyleType={setType} />
      <DisplayBox>{getHTML()}</DisplayBox>
      <CodeBox snippet={data} />
    </div>
  );
}

export default ButtonColors;
