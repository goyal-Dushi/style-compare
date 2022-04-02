import React, { useState, useRef, lazy, Suspense } from 'react';
import Interface from '../../../components/Interface';
import { htmlDismiss } from '../alertsHtml';

const MaterialAlertDismiss = lazy(() => import('./Libs/MaterialAlertDismiss'));
const BootstrapAlertDismiss = lazy(() =>
  import('./Libs/BootstrapAlertDismiss'),
);

const {
  content: { dismissable },
  links: { forAlertDismissable, defaultAlertLink },
} = require('../alerts.json');
const { descContent } = require('../../common.json');

export default function DismissAlert({ id }) {
  const [type, setType] = useState('M');
  const html = useRef();
  const desc = useRef();
  const link = useRef();

  const getHTML = () => {
    desc.current = dismissable[type] || descContent.defaultText;
    html.current = htmlDismiss[type];
    link.current = forAlertDismissable[type] || defaultAlertLink[type];
    switch (type) {
      case 'M':
        return (
          <Suspense fallback={'Loading...'}>
            <MaterialAlertDismiss />
          </Suspense>
        );
      case 'B':
        return (
          <Suspense fallback={'Loading'}>
            <BootstrapAlertDismiss />
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
        heading={'Dismiss Alert'}
        content={desc}
        linkTo={link}
        setType={setType}
        setHtml={getHTML}
        codeData={html}
      />
    </>
  );
}
