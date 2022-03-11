import React, { useState, useRef, useCallback } from "react";
import Interface from "../../../../components/Interface";
import { htmlAlignContent } from "../badgeHtml";
import GetBadgeComponent from "../GetBadgeComponent";
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

  const getLink = useCallback(() => {
    if (forBadgeAlignContent[type]) {
      return forBadgeAlignContent[type];
    }
    switch (type) {
      case "M":
        return materialBadgeAPI;
      case "B":
        return bootstrapBadgeAPI;
      default:
        return "";
    }
  }, [type]);

  const getHTML = () => {
    html.current = htmlAlignContent[type];
    desc.current = alignContent[type] || descContent.defaultText;
    link.current = getLink();
    return <GetBadgeComponent cssLib={type} componentType={id} />;
  };

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
