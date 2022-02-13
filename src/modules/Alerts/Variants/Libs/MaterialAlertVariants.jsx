import React from "react";
import { Alert } from "@mui/material";

export default function MaterialAlertVariants() {
  return (
    <>
      <Alert> {"Default Standard variant"} </Alert>
      <Alert variant={"filled"} severity={"info"}>
        {"Filled"}
      </Alert>
      <Alert variant={"outlined"} severity={"warning"}>
        {"Outlined"}
      </Alert>
    </>
  );
}
