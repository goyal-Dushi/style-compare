import React from "react";
import { Alert, AlertTitle } from "@mui/material";

export default function MaterialAlertContent() {
  return (
    <>
      <Alert severity={"error"}>
        <AlertTitle>{"Error Title"}</AlertTitle>
        {"This is an error alert — "}
        <strong>{"error occured"}</strong>
      </Alert>
      <Alert color={"warning"}>
        <AlertTitle>{"Warning Title"}</AlertTitle>
        {"This is a warning alert — "}
        <strong>{"warning!"}</strong>
      </Alert>
    </>
  );
}
