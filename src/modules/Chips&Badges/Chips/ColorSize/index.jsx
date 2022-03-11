import React, { useState, useCallback, useRef } from "react";
import Interface from "../../../../components/Interface";
import { htmlChipColorSize } from "../../chipsHtml";
import GetChipComponent from "../GetChipComponent";
const {
  content: { colorSizes },
  links: { forChipColorSizes, materialChipAPI, bootstrapChipAPI },
} = require("../chips.json");
const { descContent } = require("../../../common.json");

export default function ColorsSizes({ id }) {
  const [type, setType] = useState("M");
  const html = useRef();
  const desc = useRef();
  const link = useRef();

  const getLink = useCallback(() => {
    if (forChipColorSizes[type]) {
      return forChipColorSizes[type];
    }
    switch (type) {
      case "M":
        return materialChipAPI;
      case "B":
        return bootstrapChipAPI;
      default:
        return "";
    }
  }, [type]);

  const getHTML = () => {
    console.log("getHtml called");
    html.current = htmlChipColorSize[type];
    desc.current = colorSizes[type] || descContent.defaultText;
    link.current = getLink();
    return <GetChipComponent cssLib={type} componentType={id} />;
  };

  return (
    <Interface
      componentID={id}
      heading={"Colors, Sizes & Variants"}
      content={desc}
      linkTo={link}
      setType={setType}
      setHtml={getHTML}
      codeData={html}
    />
  );
}
