import React, { useState, useCallback, useRef, lazy, Suspense } from 'react';
import Interface from '../../../../components/Interface';
import { htmlChipColorSize } from '../../chipsHtml';

const BootstrapChipColorSize = lazy(() =>
  import('./Libs/BootstrapChipColorSize'),
);
const MaterialChipColorSize = lazy(() =>
  import('./Libs/MaterialChipColorSize'),
);

const {
  content: { colorSizes },
  links: { forChipColorSizes, defaultChipLink },
} = require('../chips.json');
const { descContent } = require('../../../common.json');

export default function ColorsSizes({ id }) {
  const [type, setType] = useState('M');
  const html = useRef();
  const desc = useRef();
  const link = useRef();

  const getHTML = useCallback(() => {
    html.current = htmlChipColorSize[type];
    desc.current = colorSizes[type] || descContent.defaultText;
    link.current = forChipColorSizes[type] || defaultChipLink[type];
    switch (type) {
      case 'M':
        return (
          <Suspense fallback={'Loading...'}>
            <MaterialChipColorSize />
          </Suspense>
        );
      case 'B':
        return (
          <Suspense fallback={'Loading...'}>
            <BootstrapChipColorSize />
          </Suspense>
        );
      default:
        return <></>;
    }
  }, [type]);

  return (
    <Interface
      componentID={id}
      heading={'Colors, Sizes & Variants'}
      content={desc}
      linkTo={link}
      setType={setType}
      setHtml={getHTML}
      codeData={html}
    />
  );
}
