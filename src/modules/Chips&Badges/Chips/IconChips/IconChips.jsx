import React, { useCallback, useState } from "react";
import CodeBox from "../../../../components/CodeBox";
import DisplayBox from "../../../../components/DisplayBox";
import StyleToggleNav from "../../../../components/StyleToggleNav";
import DescBox from "../../../../components/DescBox";
import MatericalChipIcon from "./Libs/MatericalChipIcon";
import BootstrapChipIcons from "./Libs/BootstrapChipIcons";
const { content, html } = require("../chips.json");
const { descContent } = require("../../../common.json");

function IconChips({ id }) {
  const [type, setType] = useState("M");

  let data;
  const getHTML = () => {
    if (type === "M") {
      data = html.icons.M;
      return <MatericalChipIcon />;
    } else if (type === "B") {
      data = html.icons.B;
      return <BootstrapChipIcons />;
    }
  };

  const getContent = useCallback(() => {
    switch (type) {
      case "M":
        return content.icons.M;
      case "B":
        return content.icons.B;
      default:
        return descContent.defaultText;
    }
  }, [type]);

  return (
    <div id={id}>
      <DescBox heading={"Icon Chips/Chip Actions"} content={getContent()} />
      <StyleToggleNav setStyleType={setType} />
      <DisplayBox> {getHTML()} </DisplayBox>
      <CodeBox snippet={data} />
    </div>
  );
}
export default IconChips;
