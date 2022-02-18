import React from "react";
import * as Boot from "react-bootstrap";

function BootstrapBadge() {
  return (
    <>
      <Boot.Button variant={"primary"} style={{ position: "relative" }}>
        {"Some Emails "}
        <Boot.Badge
          bg={"dark"}
          text={"info"}
          style={{ position: "absolute", top: "-10px", right: "-25px" }}>
          {"99+"}
        </Boot.Badge>
      </Boot.Button>
      <Boot.Button variant={"danger"} style={{ position: "relative" }}>
        {"Spam"}
        <Boot.Badge
          bg={"dark"}
          text={"danger"}
          style={{
            position: "absolute",
            top: "30px",
            bottom: "-15px",
            right: "-25px",
          }}>
          {"99+"}
        </Boot.Badge>
      </Boot.Button>
    </>
  );
}

export default BootstrapBadge;
