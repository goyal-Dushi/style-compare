import React, { useState, useRef } from "react";
import Interface from "../../../components/Interface";
import BootstrapProgAnimationLable from "./Libs/BootstrapProgAnimationLable";
import MaterialProgAnimationLabel from "./Libs/MaterialProgAnimationLabel";
import { htmlanimationLabels } from "../progressHtml";
const {
  content: { animationLabel },
} = require("../progress.json");
const { descContent } = require("../../common.json");

function AnimationLabels({ id }) {
  const [type, setType] = useState("M");
  const html = useRef();
  const desc = useRef();

  const getHTML = () => {
    switch (type) {
      case "M":
        html.current = htmlanimationLabels.M;
        desc.current = animationLabel.M
          ? animationLabel.M
          : descContent.defaultText;
        return <MaterialProgAnimationLabel />;
      case "B":
        html.current = htmlanimationLabels.B;
        desc.current = animationLabel.B
          ? animationLabel.B
          : descContent.defaultText;
        return <BootstrapProgAnimationLable />;
      default:
        desc.current = descContent.defaultText;
        return <></>;
    }
  };

  return (
    <Interface
      componentID={id}
      heading={"Animation & Labels"}
      content={desc}
      setType={setType}
      setHtml={getHTML}
      codeData={html}
    />
  );
}

export default AnimationLabels;
