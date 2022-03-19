import React from 'react';
import DescBox from './DescBox';
import StyleToggleNav from './StyleToggleNav';
import DisplayBox from './DisplayBox';
import CodeBox from './CodeBox';

export default function Interface(props) {
  const { componentID, heading, content, setType, setHtml, codeData } = props;

  return (
    <div id={componentID}>
      <DescBox heading={heading} content={content} />
      <StyleToggleNav setStyleType={setType} />
      {setHtml ? <DisplayBox> {setHtml()} </DisplayBox> : ''}
      <CodeBox snippet={codeData?.current} />
    </div>
  );
}
