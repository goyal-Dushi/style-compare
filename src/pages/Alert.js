import React from "react";
import RightSideNav from "../components/RightSideNav";
import DismissAlert from "../modules/Alerts/Dismissable";
import AlertColors from "../modules/Alerts/Colors";
import AdditionalContent from "../modules/Alerts/Content";
import AlertVariants from "../modules/Alerts/Variants";

function Alerts() {
  return (
    <div className={"w-100 d-flex"}>
      <div className={"w-75"}>
        <h1 className={"display-4 fw-bold ps-4"}>{"Alerts"}</h1>
        <AlertColors id={"alertColors"} />
        <AlertVariants id={"alertVariants"} />
        <AdditionalContent id={"alertContent"} />
        <DismissAlert id={"alertDismiss"} />
      </div>
      <RightSideNav
        values={[
          "Colors & Icons",
          "Variants",
          "Additional Content",
          "Dismissable Alerts",
        ]}
        scrollRef={[
          "#alertColors",
          "#alertVariants",
          "#alertContent",
          "#alertDismiss",
        ]}
      />
    </div>
  );
}

export default Alerts;
