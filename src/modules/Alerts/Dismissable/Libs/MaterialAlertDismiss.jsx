import React, { useState } from "react";
import { Alert, Button } from "@mui/material";

export default function MaterialAlertDismiss() {
  const [open, setOpen] = useState(true);
  const [open2, setOpen2] = useState(true);
  return (
    <>
      <div className={"d-flex w-100 mb-2"}>
        {open ? (
          <Alert
            onClose={() => {
              setOpen(false);
            }}>
            {"Dismissible Alert"}
          </Alert>
        ) : null}
        <Button
          className={"mx-2"}
          variant={"outlined"}
          onClick={() => setOpen(true)}
          color={"primary"}>
          {"Open Alert"}
        </Button>
      </div>
      <div className={"d-flex w-100"}>
        {open2 ? (
          <Alert
            action={
              <Button
                color={"inherit"}
                size={"small"}
                onClick={() => setOpen2(false)}>
                {"CLOSE"}
              </Button>
            }>
            {"Dismissible Alert"}
          </Alert>
        ) : null}
        <Button
          className={"mx-2"}
          variant={"outlined"}
          onClick={() => setOpen2(true)}
          color={"primary"}>
          {"Open Alert"}
        </Button>
      </div>
    </>
  );
}
