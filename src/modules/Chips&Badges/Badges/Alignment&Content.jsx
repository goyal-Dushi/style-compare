import { Mail } from "@mui/icons-material";
import Badge from "@mui/material/Badge";
import * as Boot from "react-bootstrap";
import React, { useState } from "react";
import CodeBox from "../../../components/CodeBox";
import DescBox from "../../../components/DescBox";
import DisplayBox from "../../../components/DisplayBox";
import StyleToggleNav from "../../../components/StyleToggleNav";
import { content, html } from "./badges.json";
import { descContent } from "../../common.json";

function AlignmentContent({ id }) {
  const [type, setType] = useState("M");

  let data;
  const getHTML = () => {
    if (type === "M") {
      data = html.alignContent.M;
      return (
        <>
          <Badge max={100} color={"secondary"} badgeContent={120}>
            <Mail />
          </Badge>
          <Badge
            max={50}
            color={"secondary"}
            badgeContent={44}
            anchorOrigin={{ vertical: "bottom", horizontal: "right" }}>
            <Mail />
          </Badge>
          <Badge
            badgeContent={0}
            showZero
            color={"secondary"}
            anchorOrigin={{ vertical: "bottom", horizontal: "left" }}>
            <Mail />
          </Badge>
          <Badge
            badgeContent={0}
            color={"secondary"}
            anchorOrigin={{ vertical: "top", horizontal: "left" }}>
            <Mail />
          </Badge>
        </>
      );
    } else if (type === "B") {
      data = html.alignContent.B;
      return (
        <>
          <Boot.Button variant={"primary"} style={{ position: "relative" }}>
            {"Some Emails "}
            <Boot.Badge
              bg={"dark"}
              text={"info"}
              style={{ position: "absolute", top: "-10px", right: "-25px" }}>
              {"99+"}
            </Boot.Badge>
          </Boot.Button>
          <Boot.Button variant={"danger"} style={{ position: "relative" }}>
            {"Spam"}
            <Boot.Badge
              bg={"dark"}
              text={"danger"}
              style={{
                position: "absolute",
                top: "30px",
                bottom: "-15px",
                right: "-25px",
              }}>
              {"99+"}
            </Boot.Badge>
          </Boot.Button>
        </>
      );
    }
  };

  const getContent = () => {
    switch (type) {
      case "M":
        return content.alignContent.M;
      case "B":
        return content.alignContent.B;
      default:
        return descContent.defaultText;
    }
  };

  return (
    <div id={id}>
      <DescBox heading={"Alignment & Content"} content={getContent()} />
      <StyleToggleNav setStyleType={setType} />
      <DisplayBox> {getHTML()} </DisplayBox>
      <CodeBox snippet={data} />
    </div>
  );
}

export default AlignmentContent;
