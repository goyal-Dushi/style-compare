import { useState } from "react";
import CodeBox from "../../../components/CodeBox";
import DisplayBox from "../../../components/DisplayBox";
import StyleToggleNav from "../../../components/StyleToggleNav";

import DescBox from "../../../components/DescBox";
import MaterialDisabledBtn from "./Libs/MaterialDisabledBtn";
import BootstrapDisabledBtn from "./Libs/BootstrapDisabledBtn";
const { content, html } = require("../buttons.json");

export default function ButtonDisabled({ id }) {
  const [type, setType] = useState("M");
  let data;
  const getHTML = () => {
    if (type === "M") {
      data = html.disabled.M;
      return <MaterialDisabledBtn />;
    } else if (type === "B") {
      data = html.disabled.B;
      return <BootstrapDisabledBtn />;
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
