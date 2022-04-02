import React, { useCallback, useState, useRef, lazy, Suspense } from 'react';
import Interface from '../../../../components/Interface';
import { htmlChipIcons } from '../../chipsHtml';

const MatericalChipIcon = lazy(() => import('./Libs/MatericalChipIcon'));
const BootstrapChipIcons = lazy(() => import('./Libs/BootstrapChipIcons'));

const {
  content: { icons },
  links: { forChipIcon, defaultChipLink },
} = require('../chips.json');
const { descContent } = require('../../../common.json');

function IconChips({ id }) {
  const [type, setType] = useState('M');
  const html = useRef();
  const desc = useRef();
  const link = useRef();

  const getHTML = useCallback(() => {
    html.current = htmlChipIcons[type];
    desc.current = icons[type] || descContent.defaultText;
    link.current = forChipIcon[type] || defaultChipLink[type];
    switch (type) {
      case 'M':
        return (
          <Suspense fallback={'Loading...'}>
            <MatericalChipIcon />
          </Suspense>
        );
      case 'B':
        return (
          <Suspense fallback={'Loading...'}>
            <BootstrapChipIcons />
          </Suspense>
        );
      default:
        return <></>;
    }
  }, [type]);

  return (
    <Interface
      componentID={id}
      heading={'Icon Chips/Chip Actions'}
      content={desc}
      linkTo={link}
      setType={setType}
      setHtml={getHTML}
      codeData={html}
    />
  );
}
export default IconChips;
