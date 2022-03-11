import React, { useState, useRef, useCallback } from "react";
import Interface from "../../../components/Interface";
import { htmlVariants } from "../alertsHtml";
import GetAlertComponent from "../GetAlertComponent";
const {
  content: { variants },
  links: { forAlertVariants, materialAlertAPI, bootstrapAlertAPI },
} = require("../alerts.json");
const { descContent } = require("../../common.json");

export default function AlertVariants({ id }) {
  const [type, setType] = useState("M");
  const html = useRef();
  const desc = useRef();
  const link = useRef();

  const getLink = useCallback(() => {
    if (forAlertVariants[type]) {
      return forAlertVariants[type];
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

  const getHTML = () => {
    html.current = htmlVariants[type];
    desc.current = variants[type] || descContent.defaultText;
    link.current = getLink();
    return <GetAlertComponent cssLib={type} componentType={id} />;
  };

  return (
    <>
      <Interface
        componentID={id}
        heading={"Variants"}
        content={desc}
        linkTo={link}
        setType={setType}
        setHtml={getHTML}
        codeData={html}
      />
    </>
  );
}
