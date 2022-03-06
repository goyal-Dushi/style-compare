import React, { useCallback, useState, useRef } from "react";
import MaterialAlertColors from "./Libs/MaterialAlertColors";
import BootstrapAlertColor from "./Libs/BootstrapAlertColor";
import { htmlColor } from "../alertsHtml";
import Interface from "../../../components/Interface";
const {
  content: { colors },
  links: { forColors },
} = require("../alerts.json");
const { descContent } = require("../../common.json");

export default function AlertColors({ id }) {
  const [type, setType] = useState("M");
  const html = useRef();
  const desc = useRef();
  const link = useRef();

  const getHTML = useCallback(() => {
    switch (type) {
      case "M":
        link.current = forColors.M;
        html.current = htmlColor.M;
        desc.current = colors.M;
        return <MaterialAlertColors />;
      case "B":
        link.current = forColors.B;
        html.current = htmlColor.B;
        desc.current = colors.B;
        return <BootstrapAlertColor />;
      default:
        desc.current = descContent.defaultText;
        return <></>;
    }
  }, [type]);

  return (
    <>
      <Interface
        componentID={id}
        heading={"Colors & Icons"}
        content={desc}
        linkTo={link}
        setType={setType}
        setHtml={getHTML}
        codeData={html}
      />
    </>
  );
}
