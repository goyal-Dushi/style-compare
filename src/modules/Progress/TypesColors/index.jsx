import React, { lazy, Suspense, useRef, useState } from 'react';
import { htmltypesColor } from '../progressHtml';
import Interface from '../../../components/Interface';

const MaterialProgTypesColor = lazy(() =>
  import('./Libs/MaterialProgTypesColor'),
);
const BootstrapProgTypesColor = lazy(() =>
  import('./Libs/BootstrapProgTypesColor'),
);

const {
  content: { typesColors },
  links: { forProgressTypeColors, defaultProgressLinks },
} = require('../progress.json');
const { descContent } = require('../../common.json');

function TypesColors({ id }) {
  const [type, setType] = useState('M');
  const html = useRef();
  const desc = useRef();
  const link = useRef();

  const getHTML = () => {
    html.current = htmltypesColor[type];
    desc.current = typesColors[type] || descContent.defaultText;
    link.current = forProgressTypeColors[type] || defaultProgressLinks[type];
    switch (type) {
      case 'M':
        return (
          <Suspense fallback={'Loading...'}>
            <MaterialProgTypesColor />
          </Suspense>
        );
      case 'B':
        return (
          <Suspense fallback={'Loading...'}>
            <BootstrapProgTypesColor />
          </Suspense>
        );
      default:
        return <></>;
    }
  };

  return (
    <Interface
      componentID={id}
      heading={'Types & Colors'}
      content={desc}
      linkTo={link}
      setType={setType}
      setHtml={getHTML}
      codeData={html}
    />
  );
}

export default TypesColors;
