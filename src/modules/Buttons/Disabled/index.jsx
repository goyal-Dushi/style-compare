import { useRef, useState } from "react";
import Interface from "../../../components/Interface";
import MaterialDisabledBtn from "./Libs/MaterialDisabledBtn";
import BootstrapDisabledBtn from "./Libs/BootstrapDisabledBtn";
import { htmlDisabled } from "../buttonsHtml";
const {
  content,
  links: { forBtnDisabled, materialBtnAPI, bootstrapBtnAPI },
} = require("../buttons.json");

export default function ButtonDisabled({ id }) {
  const [type, setType] = useState("M");
  const html = useRef();
  const desc = useRef(content.disabled.C);
  const link = useRef();

  const getHTML = () => {
    if (type === "M") {
      html.current = htmlDisabled.M;
      link.current = forBtnDisabled.M || materialBtnAPI;
      return <MaterialDisabledBtn />;
    } else if (type === "B") {
      html.current = htmlDisabled.B;
      link.current = forBtnDisabled.B || bootstrapBtnAPI;
      return <BootstrapDisabledBtn />;
    }
  };
  return (
    <Interface
      componentID={id}
      heading={"Disabled Buttons"}
      content={desc}
      linkTo={link}
      setType={setType}
      setHtml={getHTML}
      codeData={html}
    />
  );
}
