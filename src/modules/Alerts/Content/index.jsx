import { useCallback, useState, useRef } from "react";
import Interface from "../../../components/Interface";
import MaterialAlertContent from "./Libs/MaterialAlertContent";
import BootstrapAlertContent from "./Libs/BootstrapAlertContent";
import { htmlContent } from "../alertsHtml";
const {
  content: { alertContent },
  links: { forAlertContent, bootstrapAlertAPI, materialAlertAPI },
} = require("../alerts.json");
const { descContent } = require("../../common.json");

export default function AdditionalContent({ id }) {
  const [type, setType] = useState("M");
  const html = useRef();
  const desc = useRef();
  const link = useRef();

  const getHTML = useCallback(() => {
    switch (type) {
      case "M":
        html.current = htmlContent.M;
        desc.current = alertContent.M;
        link.current = forAlertContent.M || materialAlertAPI;
        return <MaterialAlertContent />;
      case "B":
        html.current = htmlContent.B;
        desc.current = alertContent.B;
        link.current = forAlertContent.B || bootstrapAlertAPI;
        return <BootstrapAlertContent />;
      default:
        desc.current = descContent.defaultText;
        return <></>;
    }
  }, [type]);

  return (
    <>
      <Interface
        componentID={id}
        heading={"Additional Content"}
        linkTo={link}
        content={desc}
        setType={setType}
        setHtml={getHTML}
        codeData={html}
      />
    </>
  );
}
