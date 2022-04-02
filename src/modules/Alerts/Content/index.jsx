import React, { useCallback, useState, useRef, lazy, Suspense } from 'react';
import Interface from '../../../components/Interface';
import { htmlContent } from '../alertsHtml';

const MaterialAlertContent = lazy(() => import('./Libs/MaterialAlertContent'));
const BootstrapAlertContent = lazy(() =>
  import('./Libs/BootstrapAlertContent'),
);

const {
  content: { alertContent },
  links: { forAlertContent, defaultAlertLink },
} = require('../alerts.json');
const { descContent } = require('../../common.json');

export default function AdditionalContent({ id }) {
  const [type, setType] = useState('M');
  const html = useRef();
  const desc = useRef();
  const link = useRef();

  const getHTML = useCallback(() => {
    html.current = htmlContent[type];
    desc.current = alertContent[type] || descContent.defaultText;
    link.current = forAlertContent[type] || defaultAlertLink[type];
    switch (type) {
      case 'M':
        return (
          <Suspense fallback={'Loading...'}>
            <MaterialAlertContent />
          </Suspense>
        );
      case 'B':
        return (
          <Suspense fallback={'Loading...'}>
            <BootstrapAlertContent />
          </Suspense>
        );
      default:
        return <></>;
    }
  }, [type]);

  return (
    <>
      <Interface
        componentID={id}
        heading={'Additional Content'}
        linkTo={link}
        content={desc}
        setType={setType}
        setHtml={getHTML}
        codeData={html}
      />
    </>
  );
}
