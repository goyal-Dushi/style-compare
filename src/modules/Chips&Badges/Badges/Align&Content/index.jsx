import React, { useState, useRef, useCallback, Suspense, lazy } from 'react';
import Interface from '../../../../components/Interface';
import { htmlAlignContent } from '../badgeHtml';

const BootstrapBadge = lazy(() => import('./Libs/BootstrapBadge'));
const MaterialBadge = lazy(() => import('./Libs/MaterialBadge'));
const {
  content: { alignContent },
  links: { forBadgeAlignContent, defaultBadgeLink },
} = require('../badges.json');
const { descContent } = require('../../../common.json');

function AlignmentContent({ id }) {
  const [type, setType] = useState('M');
  const html = useRef();
  const desc = useRef();
  const link = useRef();

  const getHTML = useCallback(() => {
    html.current = htmlAlignContent[type];
    desc.current = alignContent[type] || descContent.defaultText;
    link.current = forBadgeAlignContent[type] || defaultBadgeLink[type];
    switch (type) {
      case 'M':
        return (
          <Suspense fallback={'Loading...'}>
            <MaterialBadge />
          </Suspense>
        );
      case 'B':
        return (
          <Suspense fallback={'Loading...'}>
            <BootstrapBadge />
          </Suspense>
        );
      default:
        return <></>;
    }
  }, [type]);

  return (
    <Interface
      componentID={id}
      heading={'Alignment & Content'}
      content={desc}
      linkTo={link}
      setType={setType}
      setHtml={getHTML}
      codeData={html}
    />
  );
}

export default AlignmentContent;
