import React, { useCallback, useState, useRef, lazy, Suspense } from 'react';
import { htmlColor } from '../alertsHtml';
import Interface from '../../../components/Interface';

const MaterialAlertColors = lazy(() => import('./Libs/MaterialAlertColors'));
const BootstrapAlertColor = lazy(() => import('./Libs/BootstrapAlertColor'));

const {
  content: { colors },
  links: { forColors, defaultAlertLink },
} = require('../alerts.json');
const { descContent } = require('../../common.json');

export default function AlertColors({ id }) {
  const [type, setType] = useState('M');
  const html = useRef();
  const desc = useRef();
  const link = useRef();

  const getHTML = useCallback(() => {
    link.current = forColors[type] || defaultAlertLink[type];
    html.current = htmlColor[type];
    desc.current = colors[type] || descContent.defaultText;
    switch (type) {
      case 'M':
        return (
          <Suspense fallback={<> {'Loading...'} </>}>
            <MaterialAlertColors />
          </Suspense>
        );
      case 'B':
        return (
          <Suspense fallback={<> {'Loading...'} </>}>
            <BootstrapAlertColor />
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
        heading={'Colors & Icons'}
        content={desc}
        linkTo={link}
        setType={setType}
        setHtml={getHTML}
        codeData={html}
      />
    </>
  );
}
