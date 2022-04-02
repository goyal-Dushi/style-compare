import React, { useState, useRef, lazy, Suspense } from 'react';
import Interface from '../../../components/Interface';
import { htmlanimationLabels } from '../progressHtml';

const BootstrapProgAnimationLabel = lazy(() =>
  import('./Libs/BootstrapProgAnimationLable'),
);
const MaterialProgAnimationLabel = lazy(() =>
  import('./Libs/MaterialProgAnimationLabel'),
);

const {
  content: { animationLabel },
  links: { forProgressLabels, defaultProgressLinks },
} = require('../progress.json');
const { descContent } = require('../../common.json');

function AnimationLabels({ id }) {
  const [type, setType] = useState('M');
  const html = useRef();
  const desc = useRef();
  const link = useRef();

  const getHTML = () => {
    html.current = htmlanimationLabels[type];
    desc.current = animationLabel[type] || descContent.defaultText;
    link.current = forProgressLabels[type] || defaultProgressLinks[type];
    switch (type) {
      case 'M':
        return (
          <Suspense fallback={'Loading...'}>
            <MaterialProgAnimationLabel />
          </Suspense>
        );
      case 'B':
        return (
          <Suspense fallback={'Loading...'}>
            <BootstrapProgAnimationLabel />
          </Suspense>
        );
      default:
        return <></>;
    }
  };

  return (
    <Interface
      componentID={id}
      heading={'Animation & Labels'}
      content={desc}
      linkTo={link}
      setType={setType}
      setHtml={getHTML}
      codeData={html}
    />
  );
}

export default AnimationLabels;
