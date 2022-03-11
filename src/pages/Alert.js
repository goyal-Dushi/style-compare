import React, { useMemo } from "react";
import RightSideNav from "../components/RightSideNav";
import DismissAlert from "../modules/Alerts/Dismissable";
import AlertColors from "../modules/Alerts/Colors";
import AdditionalContent from "../modules/Alerts/Content";
import AlertVariants from "../modules/Alerts/Variants";
const { componentIDs, navLabels } = require("../modules/Alerts/alerts.json");

function Alerts() {
  const scrollIDS = useMemo(() => {
    let idArray = [];
    for (const id in componentIDs) {
      idArray.push("#" + componentIDs[id]);
    }
    return idArray;
  }, []);

  return (
    <div className={"w-100 d-flex"}>
      <div className={"w-75"}>
        <h1 className={"display-4 fw-bold ps-4"}>{"Alerts"}</h1>
        <AlertColors id={componentIDs.alertColorID} />
        <AlertVariants id={componentIDs.alertVariantID} />
        <AdditionalContent id={componentIDs.alertContentID} />
        <DismissAlert id={componentIDs.alertDismissID} />
      </div>
      <RightSideNav values={navLabels} scrollRef={scrollIDS} />
    </div>
  );
}

export default Alerts;
