import React, { useState } from "react";
import CodeBox from "../../components/CodeBox";
import DisplayBox from "../../components/DisplayBox";
import StyleToggleNav from "../../components/StyleToggleNav";
import { Button } from "@mui/material";
import * as Bootstrap from "react-bootstrap";
import DescBox from "../../components/DescBox";
const { content, html } = require("./buttons.json");
const { descContent } = require("../common.json");

export default function ButtonSizeVariants({ id }) {
  const [type, setType] = useState("M");
  let data;
  const getHTML = () => {
    if (type === "M") {
      data = html.sizeVariants.M;
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
      data = html.sizeVariants.B;
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

  const getContent = () => {
    switch (type) {
      case "M":
        return content.sizeVariants.M;
      case "B":
        return content.sizeVariants.B;
      default:
        return descContent.defaultText;
    }
  };

  return (
    <div id={id}>
      <DescBox heading={"Sizes & Variants"} content={getContent()} />
      <StyleToggleNav setStyleType={setType} />
      <DisplayBox>{getHTML()}</DisplayBox>
      <CodeBox snippet={data} />
    </div>
  );
}
