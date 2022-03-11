import React, { useCallback, useState, useRef } from "react";
import { htmlColor } from "../alertsHtml";
import Interface from "../../../components/Interface";
import GetAlertComponent from "../GetAlertComponent";
const {
  content: { colors },
  links: { forColors, materialAlertAPI, bootstrapAlertAPI },
} = require("../alerts.json");
const { descContent } = require("../../common.json");

export default function AlertColors({ id }) {
  const [type, setType] = useState("M");
  const html = useRef();
  const desc = useRef();
  const link = useRef();

  const getLink = useCallback(() => {
    if (forColors[type]) {
      return forColors[type];
    }
    switch (type) {
      case "M":
        return materialAlertAPI;
      case "B":
        return bootstrapAlertAPI;
      default:
        return "";
    }
  }, [type]);

  const getHTML = useCallback(() => {
    html.current = htmlColor[type];
    desc.current = colors[type] || descContent.defaultText;
    link.current = getLink();
    return <GetAlertComponent cssLib={type} componentType={id} />;
  }, [type, getLink, id]);

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
