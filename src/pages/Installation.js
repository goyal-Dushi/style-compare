import React, { useEffect, useRef, useState } from "react";
import Interface from "../components/Interface";
const { install, heading, contentDesc } = require("./installation.json");
const { descContent: defaultHeading } = require("../modules/common.json");

export default function Installation() {
  const [type, setType] = useState("M");
  const [data, setData] = useState({
    html: install[type],
    heading: heading[type],
  });
  const desc = useRef(contentDesc);

  useEffect(() => {
    setData({
      html: install[type],
      heading: heading[type] || defaultHeading,
    });
  }, [type]);

  return (
    <>
      <h1 className={"display-4 fw-bold"}> {"Installation"} </h1>
      <Interface
        heading={data.heading}
        content={desc}
        setType={setType}
        codeData={data.html}
      />
    </>
  );
}
