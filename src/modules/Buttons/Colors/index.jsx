import React, { useState, useRef } from "react";
import Interface from "../../../components/Interface";
import GetButtonComponent from "../GetButtonComponent";
import { htmlColors } from "../buttonsHtml";
import { useCallback } from "react";
const {
  content: { colors },
  links: { forBtnColors, materialBtnAPI, bootstrapBtnAPI },
} = require("../buttons.json");
const { descContent } = require("../../common.json");

function ButtonColors({ id }) {
  const [type, setType] = useState("M");
  const html = useRef();
  const desc = useRef();
  const link = useRef();

  const getLink = useCallback(() => {
    if (forBtnColors[type]) {
      return forBtnColors[type];
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
    html.current = htmlColors[type];
    desc.current = colors[type] || descContent.defaultText;
    link.current = getLink();
    return <GetButtonComponent cssLib={type} componentType={id} />;
  };

  return (
    <>
      <Interface
        componentID={id}
        heading={"Colors"}
        content={desc}
        linkTo={link}
        setType={setType}
        setHtml={getHTML}
        codeData={html}
      />
    </>
  );
}

export default ButtonColors;
