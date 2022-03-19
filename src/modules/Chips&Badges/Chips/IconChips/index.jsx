import React, { useCallback, useState, useRef } from 'react';
import MatericalChipIcon from './Libs/MatericalChipIcon';
import BootstrapChipIcons from './Libs/BootstrapChipIcons';
import Interface from '../../../../components/Interface';
import { htmlChipIcons } from '../../chipsHtml';

const {
  content: { icons },
} = require('../chips.json');
const { descContent } = require('../../../common.json');

function IconChips({ id }) {
  const [type, setType] = useState('M');
  const html = useRef();
  const desc = useRef();

  const getHTML = useCallback(() => {
    switch (type) {
      case 'M':
        html.current = htmlChipIcons.M;
        desc.current = icons.M;
        return <MatericalChipIcon />;
      case 'B':
        html.current = htmlChipIcons.B;
        desc.current = icons.B;
        return <BootstrapChipIcons />;
      default:
        desc.current = descContent.defaultText;
        return <></>;
    }
  }, [type]);

  return (
    <Interface
      componentID={id}
      heading={'Icon Chips/Chip Actions'}
      content={desc}
      setType={setType}
      setHtml={getHTML}
      codeData={html}
    />
  );
}
export default IconChips;
