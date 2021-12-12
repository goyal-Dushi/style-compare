import { Mail } from "@mui/icons-material";
import Badge from "@mui/material/Badge";
import * as Boot from "react-bootstrap";
import React, { useState } from "react";
import CodeBox from "../../../components/CodeBox";
import DescBox from "../../../components/DescBox";
import DisplayBox from "../../../components/DisplayBox";
import StyleToggleNav from "../../../components/StyleToggleNav";

function AlignmentContent() {
  const [type, setType] = useState("M");

  let data;
  const getHTML = () => {
    if (type === "M") {
      data = `
    <Badge max={100} color="secondary" badgeContent={120} >
        <Mail/>
    </Badge>
    <Badge max={50} color="secondary" badgeContent={44} anchorOrigin={{vertical:'bottom', horizontal:'right'}} >
        <Mail/>
    </Badge>
    <Badge badgeContent={0} color="secondary" showZero anchorOrigin={{vertical:'bottom', horizontal:'left'}}>
        <Mail/>
    </Badge>
    <Badge badgeContent={0} color="secondary" anchorOrigin={{vertical:'top', horizontal:'left'}} >
        <Mail/>
    </Badge>
    `;
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
      data = `
    <Button variant={"info"} style={{ position: "relative" }}>
        Some Emails
        <Badge style={{ position: "absolute", top: "-10px", right: "-25px" }} bg={"success"} text={"danger"} >
            99+
        </Badge>
    </Button>
    <Button variant={"danger"} style={{ position: "relative" }}>
        Spam
        <Badge bg={"dark"} text={"danger"} style={{position: "absolute", top: "30px", bottom: "-15px", right: "-25px"}}>
            99+
        </Badge>
    </Button>
    `;
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
    if (type === "M") {
      return (
        <>
          <b> Material </b> provides attributes like
          <span className='codeSnippet'>anchorOrigin</span>
          to control the alignment of badges and
          <span className='codeSnippet'>badgeContent</span>,
          <span className='codeSnippet'>max</span> and
          <span className='codeSnippet'>showZero</span>
          like properties to set the content inside badge, set maximum value for
          the badge content
          {
            "(if content exceeds max value, then material adds <span className='codeSnippet'> + </span> after the value, and "
          }
          boolean property to show zero value or not respectively. By default,
          showZero is set to <span className='codeSnippet'> false </span>.
        </>
      );
    } else if (type === "B") {
      return (
        <>
          <b> Bootstrap </b> dosen't provide any property for alignment of
          badges or even content. There is only the
          <span className='codeSnippet'> text </span>
          attribute which is used to set the color for the text content inside
          the badge. Apart from this, you have to manually provide styles in
          order to align the badges.
        </>
      );
    }
  };

  return (
    <>
      <DescBox heading={"Alignment & Content"} content={getContent()} />
      <StyleToggleNav setStyleType={setType} />
      <DisplayBox> {getHTML()} </DisplayBox>
      <CodeBox snippet={data} />
    </>
  );
}

export default AlignmentContent;
