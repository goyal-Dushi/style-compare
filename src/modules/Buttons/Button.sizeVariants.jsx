import React, { useState } from "react";
import CodeBox from "../../components/CodeBox";
import DisplayBox from "../../components/DisplayBox";
import StyleToggleNav from "../../components/StyleToggleNav";
import { Button } from "@mui/material";
import * as Bootstrap from "react-bootstrap";
import DescBox from "../../components/DescBox";

export default function ButtonSizeVariants({ id }) {
  const [type, setType] = useState("M");
  let data;
  const getHTML = () => {
    if (type === "M") {
      data = `
    <Button variant="contained" color="primary" size="large">
      Contained Large Button
    </Button>
    <Button variant="outlined" color="primary" size="medium">
      Outlined Medium Button
    </Button>
    <Button color="primary" size="small">
      Default variant Text & Small Button
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
    <Button size="lg">
      Default Primary Button & Large size
    </Button>
    <Button variant="outline-secondary" size="sm">
      Outlined Small Button
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

  const getContent = () => {
    if (type === "M") {
      return (
        <>
          {"In"} <b> {"Material"} </b>
          {", there are three sizes available for buttons,"}
          <span className={"codeSnippet"}>{"large"}</span> {","}
          <span className={"codeSnippet"}>{"medium"}</span> {"&"}
          <span className={"codeSnippet"}>{"small"}</span>
          {"which could be applied to its"}
          <span className='codeSnippet'>{"size"}</span> {"property/attribute"}.
        </>
      );
    } else if (type === "B") {
      return (
        <>
          <b> {"Bootstrap"} </b>
          {"provides only two sizes,"}
          <span className={"codeSnippet"}>{"lg : large"}</span> {"&"}
          <span className={"codeSnippet"}>{"sm: small"}</span>
          {". These could be applied to their respective"}
          <span className={"codeSnippet"}>{"size"}</span> {"property."}
        </>
      );
    }
  };

  return (
    <div id={id}>
      <DescBox heading={"Sizes & Variants"} content={<>{".Whereas in"}</>} />
      <StyleToggleNav setStyleType={setType} />
      <DisplayBox>{getHTML()}</DisplayBox>
      <CodeBox snippet={data} />
    </div>
  );
}
