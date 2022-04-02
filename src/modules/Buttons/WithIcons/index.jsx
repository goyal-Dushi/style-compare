import React, { useState, useRef, lazy, Suspense } from 'react';
import Interface from '../../../components/Interface';
import { htmlWithIcons } from '../buttonsHtml';

const MaterialBtnIcon = lazy(() => import('./Libs/MaterialBtnIcon'));
const BootstrapBtnIcon = lazy(() => import('./Libs/BootstrapBtnIcon'));

const {
  content: { icons },
  links: { forBtnIcons, defaultBtnLink },
} = require('../buttons.json');
const { descContent } = require('../../common.json');

export default function WithIcons({ id }) {
  const [type, setType] = useState('M');
  const html = useRef();
  const desc = useRef();
  const link = useRef();

  const getHTML = () => {
    html.current = htmlWithIcons[type];
    desc.current = icons[type] || descContent.defaultText;
    link.current = forBtnIcons[type] || defaultBtnLink[type];
    switch (type) {
      case 'M':
        return (
          <Suspense fallback={'Loading...'}>
            <MaterialBtnIcon />
          </Suspense>
        );
      case 'B':
        return (
          <Suspense fallback={'Loading...'}>
            <BootstrapBtnIcon />
          </Suspense>
        );
      default:
        return <></>;
    }
  };

  return (
    <Interface
      componentID={id}
      heading={'With Icons'}
      content={desc}
      linkTo={link}
      setType={setType}
      setHtml={getHTML}
      codeData={html}
    />
  );
}
