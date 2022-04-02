import React, { lazy, Suspense, useRef, useState } from 'react';
import Interface from '../../../components/Interface';
import { htmlDisabled } from '../buttonsHtml';

const MaterialDisabledBtn = lazy(() => import('./Libs/MaterialDisabledBtn'));
const BootstrapDisabledBtn = lazy(() => import('./Libs/BootstrapDisabledBtn'));

const {
  content,
  links: { forBtnDisabled, defaultBtnLink },
} = require('../buttons.json');

export default function ButtonDisabled({ id }) {
  const [type, setType] = useState('M');
  const html = useRef();
  const desc = useRef(content.disabled.C);
  const link = useRef();

  const getHTML = () => {
    html.current = htmlDisabled[type];
    link.current = forBtnDisabled[type] || defaultBtnLink[type];
    switch (type) {
      case 'M':
        return (
          <Suspense fallback={'Loading...'}>
            <MaterialDisabledBtn />
          </Suspense>
        );
      case 'B':
        return (
          <Suspense fallback={'Loading...'}>
            <BootstrapDisabledBtn />
          </Suspense>
        );
      default:
        return <></>;
    }
  };
  return (
    <Interface
      componentID={id}
      heading={'Disabled Buttons'}
      content={desc}
      linkTo={link}
      setType={setType}
      setHtml={getHTML}
      codeData={html}
    />
  );
}
