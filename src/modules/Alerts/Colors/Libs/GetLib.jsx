import React, { useEffect, useRef, createRef, useState } from "react";
import MaterialAlertColors from "./MaterialAlertColors";
import BootstrapAlertColor from "./BootstrapAlertColor";

export default function GetLib({ type }) {
  console.log("type in getLib: ", type);
  if (type === "M") {
    return <MaterialAlertColors />;
  }
  if (type === "B") {
    return <BootstrapAlertColor />;
  }
  return <></>;
}
