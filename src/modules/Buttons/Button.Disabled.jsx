import { useState } from "react";
import CodeBox from "../../components/CodeBox";
import DisplayBox from "../../components/DisplayBox";
import StyleToggleNav from "../../components/StyleToggleNav";
import { Button } from "@mui/material";
import * as Bootstrap from "react-bootstrap";
import DescBox from "../../components/DescBox";

export default function ButtonDisabled() {
  const [type, setType] = useState("M");
  let data;
  const getHTML = () => {
    if (type === "M") {
      data = `
      <Button disabled variant={"contained"} color={"primary"} > {"Disabled"} </Button>
      <Button disabled variant={"outlined"} color={"primary"} > {"Disabled"} </Button>
      <Button disabled color={"primary"} > {"Disabled"} </Button>
      `;
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
      data = `
      <Button variant={"primary"} size={"lg"} disabled> {"Disabled"} </Button>
      <Button variant={"outline-primary"} size={"lg"} disabled> {"Disabled"} </Button>
      `;
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
    <>
      <DescBox
        heading={"Disabled Buttons"}
        content={
          <>
            {"For disabling a button, both Material & Bootstrap uses"}
            <span className={"codeSnippet"}>{"disabled"}</span>
            {"attribute for the element"}
          </>
        }
      />
      <StyleToggleNav setStyleType={setType} />
      <DisplayBox>{getHTML()}</DisplayBox>
      <CodeBox snippet={data} />
    </>
  );
}
