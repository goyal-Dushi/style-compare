import React from "react";

export default function DescBox({ heading, content }) {
  return (
    <div style={{ margin: "40px 40px 0px" }}>
      <h2 className={"display-6"}> {heading} </h2>
      <p>{content}</p>
    </div>
  );
}
