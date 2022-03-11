import { useCallback, useState, useRef } from "react";
import Interface from "../../../components/Interface";
import { htmlContent } from "../alertsHtml";
import GetAlertComponent from "../GetAlertComponent";
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

  const getLink = useCallback(() => {
    if (forAlertContent[type]) {
      return forAlertContent[type];
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

  const getHTML = useCallback(() => {
    html.current = htmlContent[type];
    desc.current = alertContent[type] || descContent.defaultText;
    link.current = getLink();
    return <GetAlertComponent cssLib={type} componentType={id} />;
  }, [type, id, getLink]);

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
