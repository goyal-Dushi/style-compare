import React, { useState, useRef, useCallback } from "react";
import BootstrapBadge from "./Libs/BootstrapBadge";
import MaterialBadge from "./Libs/MaterialBadge";
import Interface from "../../../../components/Interface";
import { htmlAlignContent } from "../badgeHtml";
const {
  content: { alignContent },
  links: { forBadgeAlignContent, materialBadgeAPI, bootstrapBadgeAPI },
} = require("../badges.json");
const { descContent } = require("../../../common.json");

function AlignmentContent({ id }) {
  const [type, setType] = useState("M");
  const html = useRef();
  const desc = useRef();
  const link = useRef();

  const getHTML = useCallback(() => {
    switch (type) {
      case "M":
        html.current = htmlAlignContent.M;
        desc.current = alignContent.M;
        link.current = forBadgeAlignContent.M || materialBadgeAPI;
        return <MaterialBadge />;
      case "B":
        html.current = htmlAlignContent.B;
        desc.current = alignContent.B;
        link.current = forBadgeAlignContent.B || bootstrapBadgeAPI;
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
      linkTo={link}
      setType={setType}
      setHtml={getHTML}
      codeData={html}
    />
  );
}

export default AlignmentContent;
