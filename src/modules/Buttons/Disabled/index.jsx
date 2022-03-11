import { useRef, useState, useCallback } from "react";
import Interface from "../../../components/Interface";
import GetButtonComponent from "../GetButtonComponent";
import { htmlDisabled } from "../buttonsHtml";
const {
  content,
  links: { forBtnDisabled, materialBtnAPI, bootstrapBtnAPI },
} = require("../buttons.json");

export default function ButtonDisabled({ id }) {
  const [type, setType] = useState("M");
  const html = useRef();
  const desc = useRef(content.disabled.C);
  const link = useRef();

  const getLink = useCallback(() => {
    if (forBtnDisabled[type]) {
      return forBtnDisabled[type];
    }
    switch (type) {
      case "M":
        return materialBtnAPI;
      case "B":
        return bootstrapBtnAPI;
      default:
        return "";
    }
  }, [type]);

  const getHTML = () => {
    html.current = htmlDisabled[type];
    link.current = getLink();
    return <GetButtonComponent cssLib={type} componentType={id} />;
  };
  return (
    <Interface
      componentID={id}
      heading={"Disabled Buttons"}
      content={desc}
      linkTo={link}
      setType={setType}
      setHtml={getHTML}
      codeData={html}
    />
  );
}
