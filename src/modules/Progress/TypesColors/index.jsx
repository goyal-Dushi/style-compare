import React, { useRef } from "react";
import { useState } from "react";
import { htmltypesColor } from "../progressHtml";
import Interface from "../../../components/Interface";
import MaterialProgTypesColor from "./Libs/MaterialProgTypesColor";
import BootstrapProgTypesColor from "./Libs/BootstrapProgTypesColor";
const {
  content: { typesColors },
} = require("../progress.json");
const { descContent } = require("../../common.json");

function TypesColors({ id }) {
  const [type, setType] = useState("M");
  const html = useRef();
  const desc = useRef();

  const getHTML = () => {
    switch (type) {
      case "M":
        html.current = htmltypesColor.M;
        desc.current = typesColors.M ? typesColors.M : descContent.defaultText;
        return <MaterialProgTypesColor />;
      case "B":
        html.current = htmltypesColor.B;
        desc.current = typesColors.B ? typesColors.B : descContent.defaultText;
        return <BootstrapProgTypesColor />;
      default:
        return <></>;
    }
  };

  return (
    <Interface
      componentID={id}
      heading={"Types & Colors"}
      content={desc}
      setType={setType}
      setHtml={getHTML}
      codeData={html}
    />
  );
}

export default TypesColors;
