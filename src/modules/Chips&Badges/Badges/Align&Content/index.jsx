import React, { useState, useRef, useCallback } from "react";
import BootstrapBadge from "./Libs/BootstrapBadge";
import MaterialBadge from "./Libs/MaterialBadge";
import Interface from "../../../../components/Interface";
import { htmlAlignContent } from "../badgeHtml";
const { content } = require("../badges.json");
const { descContent } = require("../../../common.json");

function AlignmentContent({ id }) {
  const [type, setType] = useState("M");
  const html = useRef();
  const desc = useRef();

  const getHTML = useCallback(() => {
    switch (type) {
      case "M":
        html.current = htmlAlignContent.M;
        desc.current = content.alignContent.M;
        return <MaterialBadge />;
      case "B":
        html.current = htmlAlignContent.B;
        desc.current = content.alignContent.B;
        return <BootstrapBadge />;
      default:
        desc.current = descContent.defaultText;
        return <></>;
    }
  }, [type]);

  return (
    <Interface
      componentID={id}
      heading={"Alignment & Content"}
      content={desc}
      setType={setType}
      setHtml={getHTML}
      codeData={html}
    />
  );
}

export default AlignmentContent;
