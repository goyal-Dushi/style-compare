import React, { useState, useRef, lazy, Suspense } from 'react';
import Interface from '../../../components/Interface';
import { htmlVariants } from '../alertsHtml';

const MaterialAlertVariants = lazy(() =>
  import('./Libs/MaterialAlertVariants'),
);
const BootstrapAlertVariants = lazy(() =>
  import('./Libs/BootstrapAlertVariants'),
);

const {
  content: { variants },
  links: { forAlertVariants, defaultAlertLink },
} = require('../alerts.json');
const { descContent } = require('../../common.json');

export default function AlertVariants({ id }) {
  const [type, setType] = useState('M');
  const html = useRef();
  const desc = useRef();
  const link = useRef();

  const getHTML = () => {
    html.current = htmlVariants[type];
    desc.current = variants[type] || descContent.defaultText;
    link.current = forAlertVariants[type] || defaultAlertLink[type];
    switch (type) {
      case 'M':
        return (
          <Suspense fallback={'Loading...'}>
            <MaterialAlertVariants />
          </Suspense>
        );
      case 'B':
        return (
          <Suspense fallback={'Loading...'}>
            <BootstrapAlertVariants />
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
        heading={'Variants'}
        content={desc}
        linkTo={link}
        setType={setType}
        setHtml={getHTML}
        codeData={html}
      />
    </>
  );
}
