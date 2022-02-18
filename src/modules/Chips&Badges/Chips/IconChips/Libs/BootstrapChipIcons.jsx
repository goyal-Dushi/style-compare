import React, { useState } from "react";
import * as Boot from "react-bootstrap";

export default function BootstrapChipIcons() {
  const [showChip, setShowChip] = useState(true);

  const handleDelete = () => {
    setShowChip(false);
  };
  return (
    <>
      <Boot.Badge pill bg={"success"} className={"fs-5"}>
        <i className={"bi bi-check-circle-fill"}></i> {"Success "}
      </Boot.Badge>
      {showChip ? (
        <Boot.Badge pill className={"fs-5"} bg={"danger"}>
          {"Delete "}
          <i className={"bi bi-trash-fill"} onClick={handleDelete}></i>
        </Boot.Badge>
      ) : (
        <Boot.Button
          onClick={() => setShowChip(true)}
          variant={"primary"}
          size={"sm"}>
          {"Show"}
        </Boot.Button>
      )}
    </>
  );
}
