import React, { useState, useRef, useCallback } from "react";
import GetButtonComponent from "../GetButtonComponent";
import Interface from "../../../components/Interface";
import { htmlWithIcons } from "../buttonsHtml";
const {
  content: { icons },
  links: { forBtnIcons, materialBtnAPI, bootstrapBtnAPI },
} = require("../buttons.json");
const { descContent } = require("../../common.json");

export default function WithIcons({ id }) {
  const [type, setType] = useState("M");
  const html = useRef();
  const desc = useRef();
  const link = useRef();

  const getLink = useCallback(() => {
    if (forBtnIcons[type]) {
      return forBtnIcons[type];
    }
    switch (type) {
      case "M":
        return materialBtnAPI;
      case "B":
        return bootstrapBtnAPI;
      default:
        return "";
    }
  }, [type]);

  const getHTML = () => {
    html.current = htmlWithIcons[type];
    desc.current = icons[type] || descContent.defaultText;
    link.current = getLink();
    return <GetButtonComponent cssLib={type} componentType={id} />;
  };

  return (
    <Interface
      componentID={id}
      heading={"With Icons"}
      content={desc}
      linkTo={link}
      setType={setType}
      setHtml={getHTML}
      codeData={html}
    />
  );
}
