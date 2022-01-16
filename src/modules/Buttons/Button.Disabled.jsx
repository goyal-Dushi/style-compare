import { useState } from "react";
import CodeBox from "../../components/CodeBox";
import DisplayBox from "../../components/DisplayBox";
import StyleToggleNav from "../../components/StyleToggleNav";
import { Button } from "@mui/material";
import * as Bootstrap from "react-bootstrap";
import DescBox from "../../components/DescBox";
const { content, html } = require("./buttons.json");

export default function ButtonDisabled({ id }) {
  const [type, setType] = useState("M");
  let data;
  const getHTML = () => {
    if (type === "M") {
      data = html.disabled.M;
      return (
        <>
          <Button
            disabled
            sx={{ margin: "10px 0px" }}
            variant={"contained"}
            size={"large"}
            color={"primary"}>
            {"Disabled"}
          </Button>
          <Button
            disabled
            sx={{ margin: "10px 0px" }}
            variant={"outlined"}
            size={"large"}
            color={"primary"}>
            {"Disabled"}
          </Button>
          <Button
            sx={{ margin: "10px 0px" }}
            disabled
            size={"large"}
            color={"primary"}>
            {"Disabled"}
          </Button>
        </>
      );
    } else if (type === "B") {
      data = html.disabled.B;
      return (
        <>
          <Bootstrap.Button
            className={"mt-2 mb-2"}
            variant={"primary"}
            size={"lg"}
            disabled>
            {"Disabled"}
          </Bootstrap.Button>
          <Bootstrap.Button
            className={"mt-2 mb-2"}
            variant={"outline-primary"}
            size={"lg"}
            disabled>
            {"Disabled"}
          </Bootstrap.Button>
        </>
      );
    }
  };
  return (
    <div id={id}>
      <DescBox heading={"Disabled Buttons"} content={content.disabled.C} />
      <StyleToggleNav setStyleType={setType} />
      <DisplayBox>{getHTML()}</DisplayBox>
      <CodeBox snippet={data} />
    </div>
  );
}
