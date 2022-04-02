import React, { useState, useRef, lazy, Suspense } from 'react';
import Interface from '../../../components/Interface';
import { htmlColors } from '../buttonsHtml';

const MaterialButtonColors = lazy(() => import('./Libs/MaterialButtonColors'));
const BootstrapButtonColors = lazy(() =>
  import('./Libs/BootstrapButtonColors'),
);

const {
  content: { colors },
  links: { forBtnColors, defaultBtnLink },
} = require('../buttons.json');
const { descContent } = require('../../common.json');

function ButtonColors({ id }) {
  const [type, setType] = useState('M');
  const html = useRef();
  const desc = useRef();
  const link = useRef();

  const getHTML = () => {
    html.current = htmlColors[type];
    desc.current = colors[type] || descContent.defaultText;
    link.current = forBtnColors[type] || defaultBtnLink[type];
    switch (type) {
      case 'M':
        return (
          <Suspense fallback={'Loading...'}>
            <MaterialButtonColors />
          </Suspense>
        );
      case 'B':
        return (
          <Suspense fallback={'Loading...'}>
            <BootstrapButtonColors />
          </Suspense>
        );
      default:
        return <></>;
    }
  };

  return (
    <>
      <Interface
        componentID={id}
        heading={'Colors'}
        content={desc}
        linkTo={link}
        setType={setType}
        setHtml={getHTML}
        codeData={html}
      />
    </>
  );
}

export default ButtonColors;
