import React from "react";
import * as Bootstrap from "react-bootstrap";

export default function BootstrapSizVarButton() {
  return (
    <>
      <Bootstrap.Button className={"mt-2 mb-2"} size={"lg"}>
        {"Default Primary Button & Large size"}
      </Bootstrap.Button>
      <Bootstrap.Button
        className={"mt-2 mb-2"}
        variant={"outline-secondary"}
        size={"sm"}>
        {"Outlined Small Button"}
      </Bootstrap.Button>
    </>
  );
}
