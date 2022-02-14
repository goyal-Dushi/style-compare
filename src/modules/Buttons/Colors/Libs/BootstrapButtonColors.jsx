import React from "react";
import * as Bootstrap from "react-bootstrap";

export default function BootstrapButtonColors() {
  return (
    <>
      <Bootstrap.Button variant={"primary"}>
        {"Primary Default"}
      </Bootstrap.Button>
      <Bootstrap.Button variant={"secondary"}>{"Secondary"}</Bootstrap.Button>
      <Bootstrap.Button className={"mt-2 mb-2"} variant={"success"}>
        {"Success"}
      </Bootstrap.Button>
      <Bootstrap.Button className={"mt-2 mb-2"} variant={"danger"}>
        {"Danger"}
      </Bootstrap.Button>
      <Bootstrap.Button className={"mt-2 mb-2"} variant={"warning"}>
        {"Warning"}
      </Bootstrap.Button>
      <Bootstrap.Button className={"mt-2 mb-2"} variant={"info"}>
        {"Info"}
      </Bootstrap.Button>
      <Bootstrap.Button className={"mt-2 mb-2"} variant={"light"}>
        {"Light"}
      </Bootstrap.Button>
      <Bootstrap.Button className={"mt-2 mb-2"} variant={"dark"}>
        {"Dark"}
      </Bootstrap.Button>
    </>
  );
}
