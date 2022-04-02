import React, { lazy, useRef, useState, Suspense } from 'react';
import Interface from '../../../components/Interface';
import { htmlSizeVariants } from '../buttonsHtml';

const MaterialSizVarButton = lazy(() => import('./Libs/MaterialSizVarButton'));
const BootstrapSizVarButton = lazy(() =>
  import('./Libs/BootstrapSizVarButton'),
);

const {
  content: { sizeVariants },
  links: { forBtnSizeVariants, defaultBtnLink },
} = require('../buttons.json');
const { descContent } = require('../../common.json');

export default function ButtonSizeVariants({ id }) {
  const [type, setType] = useState('M');
  const html = useRef();
  const desc = useRef();
  const link = useRef();

  const getHTML = () => {
    html.current = htmlSizeVariants[type];
    desc.current = sizeVariants[type] || descContent.defaultText;
    link.current = forBtnSizeVariants[type] || defaultBtnLink[type];
    switch (type) {
      case 'M':
        return (
          <Suspense fallback={'Loading...'}>
            <MaterialSizVarButton />
          </Suspense>
        );
      case 'B':
        return (
          <Suspense fallback={'Loading...'}>
            <BootstrapSizVarButton />
          </Suspense>
        );
      default:
        return <></>;
    }
  };

  return (
    <Interface
      componentID={id}
      heading={'Sizes & Variants'}
      content={desc}
      linkTo={link}
      setType={setType}
      setHtml={getHTML}
      codeData={html}
    />
  );
}
