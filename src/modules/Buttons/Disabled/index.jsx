import { useRef, useState } from "react";
import Interface from "../../../components/Interface";
import MaterialDisabledBtn from "./Libs/MaterialDisabledBtn";
import BootstrapDisabledBtn from "./Libs/BootstrapDisabledBtn";
import { htmlDisabled } from "../buttonsHtml";
const { content } = require("../buttons.json");

export default function ButtonDisabled({ id }) {
  const [type, setType] = useState("M");
  const html = useRef();
  const desc = useRef(content.disabled.C);

  const getHTML = () => {
    if (type === "M") {
      html.current = htmlDisabled.M;
      return <MaterialDisabledBtn />;
    } else if (type === "B") {
      html.current = htmlDisabled.B;
      return <BootstrapDisabledBtn />;
    }
  };
  return (
    <Interface
      componentID={id}
      heading={"Disabled Buttons"}
      content={desc}
      setType={setType}
      setHtml={getHTML}
      codeData={html}
    />
  );
}
