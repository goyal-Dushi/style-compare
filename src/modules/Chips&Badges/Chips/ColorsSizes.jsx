import { Chip } from "@mui/material";
import React, { useState, useCallback } from "react";
import * as Boot from "react-bootstrap";
import CodeBox from "../../../components/CodeBox";
import DescBox from "../../../components/DescBox";
import DisplayBox from "../../../components/DisplayBox";
import StyleToggleNav from "../../../components/StyleToggleNav";
import { content, html } from "./chips.json";
import { descContent } from "../../common.json";

export default function ColorsSizes({ id }) {
  const [type, setType] = useState("M");
  let data;
  const getHTML = () => {
    if (type === "M") {
      data = html.colorSizes.M;
      return (
        <>
          <Chip label={"Default Chip"} />
          <Chip label={"Primary"} color={"primary"} variant={"outlined"} />
          <Chip label={"Secondary"} color={"secondary"} variant={"outlined"} />
          <Chip label={"Error"} color={"error"} variant={"outlined"} />
          <Chip label={"Info"} color={"info"} size={"small"} />
          <Chip label={"Success"} color={"success"} size={"small"} />
          <Chip label={"Warning"} color={"warning"} size={"small"} />
        </>
      );
    } else if (type === "B") {
      data = html.colorSizes.B;
      return (
        <>
          <Boot.Badge pill> {"Primary Default"} </Boot.Badge>
          <Boot.Badge pill className={"fs-1"} bg={"success"}>
            {"Success"}
          </Boot.Badge>
          <Boot.Badge pill className={"fs-2"} bg={"danger"}>
            {"Danger"}
          </Boot.Badge>
          <Boot.Badge pill className={"fs-3"} bg={"warning"}>
            {"Warning!"}
          </Boot.Badge>
          <Boot.Badge pill className={"fs-4"} bg={"info"}>
            {"Info"}
          </Boot.Badge>
          <Boot.Badge className={"text-secondary fs-5"} pill bg={"light"}>
            {"Light"}
          </Boot.Badge>
          <Boot.Badge className={"fs-6"} pill bg={"dark"}>
            {"Dark"}
          </Boot.Badge>
        </>
      );
    }
  };

  const getContent = useCallback(() => {
    switch (type) {
      case "M":
        return content.colorSizes.M;
      case "B":
        return content.colorSizes.B;
      default:
        return descContent.defaultText;
    }
  }, [type]);

  return (
    <div id={id}>
      <DescBox heading={"Colors, Sizes & Variants"} content={getContent()} />
      <StyleToggleNav setStyleType={setType} />
      <DisplayBox> {getHTML()} </DisplayBox>
      <CodeBox snippet={data} />
    </div>
  );
}
