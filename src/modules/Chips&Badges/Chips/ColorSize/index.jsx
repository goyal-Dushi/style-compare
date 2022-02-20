import React, { useState, useCallback, useRef } from "react";
import Interface from "../../../../components/Interface";
import BootstrapChipColorSize from "./Libs/BootstrapChipColorSize";
import MaterialChipColorSize from "./Libs/MaterialChipColorSize";
import { htmlChipColorSize } from "../../chipsHtml";
const {
  content: { colorSizes },
} = require("../chips.json");
const { descContent } = require("../../../common.json");

export default function ColorsSizes({ id }) {
  const [type, setType] = useState("M");
  const html = useRef();
  const desc = useRef();

  const getHTML = useCallback(() => {
    switch (type) {
      case "M":
        html.current = htmlChipColorSize.M;
        desc.current = colorSizes.M;
        return <MaterialChipColorSize />;
      case "B":
        html.current = htmlChipColorSize.B;
        desc.current = colorSizes.B;
        return <BootstrapChipColorSize />;
      default:
        desc.current = descContent.defaultText;
        return <></>;
    }
  }, [type]);

  return (
    <Interface
      componentID={id}
      heading={"Colors, Sizes & Variants"}
      content={desc}
      setType={setType}
      setHtml={getHTML}
      codeData={html}
    />
  );
}
