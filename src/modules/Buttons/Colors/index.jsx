import React, { useState, useRef } from 'react';
import Interface from '../../../components/Interface';
import MaterialButtonColors from './Libs/MaterialButtonColors';
import BootstrapButtonColors from './Libs/BootstrapButtonColors';
import { htmlColors } from '../buttonsHtml';

const { content } = require('../buttons.json');
const { descContent } = require('../../common.json');

function ButtonColors({ id }) {
  const [type, setType] = useState('M');
  const html = useRef();
  const desc = useRef();

  const getHTML = () => {
    switch (type) {
      case 'M':
        html.current = htmlColors.M;
        desc.current = content.colors.M;
        return <MaterialButtonColors />;
      case 'B':
        html.current = htmlColors.B;
        desc.current = content.colors.B;
        return <BootstrapButtonColors />;
      default:
        desc.current = descContent.defaultText;
        return <></>;
    }
  };

  return (
    <Interface
      componentID={id}
      heading={'Colors'}
      content={desc}
      setType={setType}
      setHtml={getHTML}
      codeData={html}
    />
  );
}

export default ButtonColors;
