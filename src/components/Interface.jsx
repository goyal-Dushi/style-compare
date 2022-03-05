import React, { useRef } from "react";
import DescBox from "./DescBox";
import StyleToggleNav from "./StyleToggleNav";
import DisplayBox from "./DisplayBox";
import CodeBox from "./CodeBox";

export default function Interface(props) {
  const { componentID, heading, content, setType, setHtml, codeData, linkTo } =
    props;
  const linkState = useRef(linkTo);
  return (
    <>
      <div id={componentID ? componentID : ""}>
        {heading && content && <DescBox heading={heading} content={content} />}
        <StyleToggleNav setStyleType={setType} linkTo={linkState?.current} />
        {setHtml ? <DisplayBox> {setHtml()} </DisplayBox> : <></>}
        {codeData && <CodeBox snippet={codeData?.current} />}
      </div>
    </>
  );
}
