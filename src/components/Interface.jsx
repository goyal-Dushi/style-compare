import React, { useRef } from 'react';
import DescBox from './DescBox';
import StyleToggleNav from './StyleToggleNav';
import DisplayBox from './DisplayBox';
import CodeBox from './CodeBox';
import CodeSandBox from './CodeSandBox';

export default function Interface(props) {
  const { componentID, heading, content, setType, setHtml, codeData, linkTo } =
    props;
  const linkState = useRef(linkTo);
  const showEditor = Boolean(componentID);
  return (
    <>
      <div id={componentID || ''}>
        {heading && content && <DescBox heading={heading} content={content} />}
        <StyleToggleNav setStyleType={setType} linkTo={linkState?.current} />
        {setHtml ? <DisplayBox> {setHtml()} </DisplayBox> : <></>}
        <CodeSandBox show={showEditor} />
        {codeData.current ? (
          <CodeBox snippet={codeData.current} />
        ) : (
          <CodeBox snippet={codeData} />
        )}
      </div>
    </>
  );
}
