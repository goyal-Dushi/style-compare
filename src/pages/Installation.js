import React, { useEffect, useRef, useState } from "react";
import Interface from "../components/Interface";
const { material, bootstrap, contentDesc } = require("./installation.json");
const { descContent: defaultHeading } = require("../modules/common.json");

export default function Installation() {
  const [type, setType] = useState("M");
  const html = useRef(material.install);
  const heading = useRef(material.heading);
  const desc = useRef(contentDesc);

  useEffect(() => {
    switch (type) {
      case "M":
        html.current = material.install;
        heading.current = material.heading;
        break;
      case "B":
        html.current = bootstrap.install;
        heading.current = bootstrap.heading;
        break;
      default:
        heading.current = defaultHeading;
        break;
    }
  }, [type]);

  return (
    <>
      <h1 className={"display-4 fw-bold"}> {"Installation"} </h1>
      <Interface
        heading={heading.current}
        content={desc}
        setType={setType}
        codeData={html}
      />
    </>
  );
}
