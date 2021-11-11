import React from "react";
import AlertColors from "../modules/Alerts/Colors";
import AlertVariants from "../modules/Alerts/Variants";

function Alerts() {
  return (
    <div className={"w-100"} style={{ overflowX: "hidden" }}>
      <h1 className={"display-4 ps-4"}>{"Alerts"}</h1>
      <AlertColors />
      <AlertVariants />
    </div>
  );
}

export default Alerts;
