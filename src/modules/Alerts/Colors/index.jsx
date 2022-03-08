import React, { useCallback, useState, useRef } from "react";
import { htmlColor } from "../alertsHtml";
import Interface from "../../../components/Interface";
import GetLib from "./Libs/GetLib";
const {
  content: { colors },
} = require("../alerts.json");
const { descContent } = require("../../common.json");

export default function AlertColors({ id }) {
  const [type, setType] = useState("M");
  const html = useRef();
  const desc = useRef();
  const link = useRef();

  const getHTML = useCallback(() => {
    html.current = htmlColor[type];
    desc.current = colors[type] || descContent.defaultText;
    return <GetLib type={type} />;
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
