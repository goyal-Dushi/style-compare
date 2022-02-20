import React, { useState, useRef } from "react";
import MaterialBtnIcon from "./Libs/MaterialBtnIcon";
import BootstrapBtnIcon from "./Libs/BootstrapBtnIcon";
import Interface from "../../../components/Interface";
import { htmlWithIcons } from "../buttonsHtml";
const {
  content: { icons },
} = require("../buttons.json");
const { descContent } = require("../../common.json");

export default function WithIcons({ id }) {
  const [type, setType] = useState("M");
  const html = useRef();
  const desc = useRef();

  const getHTML = () => {
    switch (type) {
      case "M":
        html.current = htmlWithIcons.M;
        desc.current = icons.M;
        return <MaterialBtnIcon />;
      case "B":
        html.current = htmlWithIcons.B;
        desc.current = icons.B;
        return <BootstrapBtnIcon />;
      default:
        desc.current = descContent.defaultText;
        return <></>;
    }
  };

  return (
    <Interface
      componentID={id}
      heading={"With Icons"}
      content={desc}
      setType={setType}
      setHtml={getHTML}
      codeData={html}
    />
  );
}
