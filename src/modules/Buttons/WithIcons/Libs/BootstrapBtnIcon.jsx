import React from "react";
import * as Boot from "react-bootstrap";

export default function BootstrapBtnIcon() {
  return (
    <>
      <Boot.Button variant={"primary"}>
        {"Send"} <i className={"bi-send"}></i>
      </Boot.Button>
      <Boot.Button variant={"outline-info"}>
        <i className={"bi-printer"}></i> {"Print"}
      </Boot.Button>
    </>
  );
}
