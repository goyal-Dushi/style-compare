import React, { useEffect, createRef } from 'react';

export default function DescBox({ heading, content }) {
  const contentRef = createRef();

  useEffect(() => {
    contentRef.current.innerHTML = content?.current;
  }, [content, contentRef]);

  return (
    <div className={'mt-3'}>
      <h2 className={'display-6'}> {heading} </h2>
      <p ref={contentRef} />
    </div>
  );
}
