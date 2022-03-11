import { useState, useRef, useCallback } from "react";
import Interface from "../../../components/Interface";
import { htmlDismiss } from "../alertsHtml";
import GetAlertComponent from "../GetAlertComponent";
const {
  content: { dismissable },
  links: { forAlertDismissable, materialAlertAPI, bootstrapAlertAPI },
} = require("../alerts.json");
const { descContent } = require("../../common.json");

export default function DismissAlert({ id }) {
  const [type, setType] = useState("M");
  const html = useRef();
  const desc = useRef();
  const link = useRef();

  const getLink = useCallback(() => {
    if (forAlertDismissable[type]) {
      return forAlertDismissable[type];
    }
    switch (type) {
      case "M":
        return materialAlertAPI;
      case "B":
        return bootstrapAlertAPI;
      default:
        return "";
    }
  }, [type]);

  const getHTML = () => {
    html.current = htmlDismiss[type];
    desc.current = dismissable[type] || descContent.defaultText;
    link.current = getLink();
    return <GetAlertComponent componentType={id} cssLib={type} />;
  };

  return (
    <>
      <Interface
        componentID={id}
        heading={"Dismiss Alert"}
        content={desc}
        linkTo={link}
        setType={setType}
        setHtml={getHTML}
        codeData={html}
      />
    </>
  );
}
