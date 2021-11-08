import { useState } from "react";
import CodeBox from "../../components/CodeBox";
import DisplayBox from "../../components/DisplayBox";
import StyleToggleNav from "../../components/StyleToggleNav";
import { Button } from "@mui/material";
import * as Bootstrap from "react-bootstrap";

export default function ButtonDisabled() {
  const [type, setType] = useState("M");
  let data;
  const getHTML = () => {
    if (type === "M") {
      data = `
      <Button disabled variant={"contained"} color={"primary"} > {"Disabled"} </Button>
      `;
      return (
        <>
          <Button
            disabled
            variant={"contained"}
            size={"large"}
            color={"primary"}>
            {"Disabled"}
          </Button>
        </>
      );
    } else if (type === "B") {
      data = `
      <Button variant={"primary"} size={"lg"} disabled> {"Disabled"} </Button>
      `;
      return (
        <>
          <Bootstrap.Button variant={"primary"} size={"lg"} disabled>
            {"Disabled"}
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
