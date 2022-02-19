import React, { useEffect, createRef } from "react";

export default function DescBox({ heading, content }) {
  const contentRef = createRef();

  useEffect(() => {
    contentRef.current.innerHTML = content?.current;
  }, [content, contentRef]);

  return (
    <div style={{ margin: "40px 40px 0px" }}>
      <h2 className={"display-6"}> {heading} </h2>
      <p ref={contentRef}></p>
    </div>
  );
}
