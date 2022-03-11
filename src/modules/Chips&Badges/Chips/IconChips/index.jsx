import React, { useCallback, useState, useRef } from "react";
import Interface from "../../../../components/Interface";
import { htmlChipIcons } from "../../chipsHtml";
import GetChipComponent from "../GetChipComponent";
const {
  content: { icons },
  links: { forChipIcon, materialChipAPI, bootstrapChipAPI },
} = require("../chips.json");
const { descContent } = require("../../../common.json");

function IconChips({ id }) {
  const [type, setType] = useState("M");
  const html = useRef();
  const desc = useRef();
  const link = useRef();

  const getLink = useCallback(() => {
    if (forChipIcon[type]) {
      return forChipIcon[type];
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
    html.current = htmlChipIcons[type];
    desc.current = icons[type] || descContent.defaultText;
    link.current = getLink();
    return <GetChipComponent cssLib={type} componentType={id} />;
  };

  return (
    <Interface
      componentID={id}
      heading={"Icon Chips/Chip Actions"}
      content={desc}
      linkTo={link}
      setType={setType}
      setHtml={getHTML}
      codeData={html}
    />
  );
}
export default IconChips;
