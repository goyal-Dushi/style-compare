import React, { useState } from "react";
import CodeBox from "../../components/CodeBox";
import DisplayBox from "../../components/DisplayBox";
import StyleToggleNav from "../../components/StyleToggleNav";
import { Button } from "@mui/material";
import * as Bootstrap from "react-bootstrap";

export default function ButtonSizeVariants() {
  const [type, setType] = useState("M");
  let data;
  const getHTML = () => {
    if (type === "M") {
      data = `
    <Button variant={"contained"} color={"primary"} size={"large"}>
      {"Contained Large Button"}
    </Button>
    <Button variant={"outlined"} color={"primary"} size={"medium"}>
      {"Outlined Medium Button"}
    </Button>
    <Button color={"primary"} size={"small"}>
      {"Default variant Text & Small Button"}
    </Button>
    `;
      return (
        <>
          <Button
            variant={"contained"}
            sx={{ margin: "10px 0px" }}
            color={"primary"}
            size={"large"}>
            {"Contained Large Button"}
          </Button>
          <Button
            variant={"outlined"}
            sx={{ margin: "10px 0px" }}
            color={"primary"}
            size={"medium"}>
            {"Outlined Medium Button"}
          </Button>
          <Button color={"primary"} sx={{ margin: "10px 0px" }} size={"small"}>
            {"Default variant Text & Small Button"}
          </Button>
        </>
      );
    } else if (type === "B") {
      data = `
    <Button size={"lg"}>
      {"Default Primary Button & Large size"}
    </Button>
    <Button variant={"outline-secondary"} size={"sm"}>
      {"Outlined Small Button"}
    </Button>
    `;
      return (
        <>
          <Bootstrap.Button className={"mt-2 mb-2"} size={"lg"}>
            {"Default Primary Button & Large size"}
          </Bootstrap.Button>
          <Bootstrap.Button
            className={"mt-2 mb-2"}
            variant={"outline-secondary"}
            size={"sm"}>
            {"Outlined Small Button"}
          </Bootstrap.Button>
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
