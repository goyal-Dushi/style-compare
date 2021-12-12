import { Chip } from "@mui/material";
import React, { useState } from "react";
import * as Boot from "react-bootstrap";
import CodeBox from "../../../components/CodeBox";
import DescBox from "../../../components/DescBox";
import DisplayBox from "../../../components/DisplayBox";
import StyleToggleNav from "../../../components/StyleToggleNav";

export default function ColorsSizes() {
  const [type, setType] = useState("M");
  let data;
  const getHTML = () => {
    if (type === "M") {
      data = `
    <Chip label="Default Chip" />
    <Chip label="Primary" color="primary" variant="outlined" />
    <Chip label="Secondary" color="secondary" variant="outlined" />
    <Chip label="Error" color="error" variant="outlined" />
    <Chip label="Info" color="info" size="small" variant="filled" />
    <Chip label="Success" color="success" size="small" />
    <Chip label="Warning" color="warning" size="small" />
    `;
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
      data = `
    <Badge pill> Primary Default </Badge>
    <Badge pill bg="success" className="fs-1" > Success </Badge>
    <Badge pill bg="danger" className="fs-2" > Danger </Badge>
    <Badge pill bg="warning" className="fs-3" > Warning! </Badge>
    <Badge pill bg="info" className="fs-4" > Info </Badge>
    <Badge pill bg="light" className="fs-5" > Light </Badge>
    <Badge pill bg="dark" className="fs-6" > Dark </Badge>
    `;
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

  const getContent = () => {
    if (type === "M") {
      return (
        <>
          <b> Material </b> has separate component named
          <span className='codeSnippet'>{"<Chip/>"}</span>
          for rendering chips.By Default, the Chip has
          <span className='codeSnippet'>size:medium</span>,
          <span className='codeSnippet'>color:default</span> and
          <span className='codeSnippet'>variant:filled</span>.
        </>
      );
    } else if (type === "B") {
      return (
        <>
          In
          <b> Bootstrap </b>, you use the same
          <span className='codeSnippet'>{"<Badge/>"}</span> for both chips and
          badges.You can use the <span className='codeSnippet'>pill</span>
          attribute for showing chip like badges. By Default, it has background,
          <span className='codeSnippet'>bg:primary</span> and no rounded
          borders. Bootstrap dosen't provide any size property/attribute for its
          Badge component, but you can trigger different sized by utilizing the
          <span className='codeSnippet'>{"fs-[x]"}</span>, where 'x' ranges from
          {"[1,6]"}, 1 being largest and 6 being smallest.
        </>
      );
    }
  };

  return (
    <div>
      <DescBox heading={"Colors, Sizes & Variants"} content={getContent()} />
      <StyleToggleNav setStyleType={setType} />
      <DisplayBox> {getHTML()} </DisplayBox>
      <CodeBox snippet={data} />
    </div>
  );
}
