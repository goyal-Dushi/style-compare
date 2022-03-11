import React, { useRef, useState, useCallback } from "react";
import Interface from "../../../components/Interface";
import GetButtonComponent from "../GetButtonComponent";
import { htmlSizeVariants } from "../buttonsHtml";
const {
  content: { sizeVariants },
  links: { forBtnSizeVariants, materialBtnAPI, bootstrapBtnAPI },
} = require("../buttons.json");
const { descContent } = require("../../common.json");

export default function ButtonSizeVariants({ id }) {
  const [type, setType] = useState("M");
  const html = useRef();
  const desc = useRef();
  const link = useRef();

  const getLink = useCallback(() => {
    if (forBtnSizeVariants[type]) {
      return forBtnSizeVariants[type];
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
    html.current = htmlSizeVariants[type];
    desc.current = sizeVariants[type] || descContent.defaultText;
    link.current = getLink();
    return <GetButtonComponent cssLib={type} componentType={id} />;
  };

  return (
    <Interface
      componentID={id}
      heading={"Sizes & Variants"}
      content={desc}
      linkTo={link}
      setType={setType}
      setHtml={getHTML}
      codeData={html}
    />
  );
}
