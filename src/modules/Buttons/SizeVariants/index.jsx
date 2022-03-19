import React, { useRef, useState } from 'react';
import Interface from '../../../components/Interface';
import MaterialSizVarButton from './Libs/MaterialSizVarButton';
import BootstrapSizVarButton from './Libs/BootstrapSizVarButton';
import { htmlSizeVariants } from '../buttonsHtml';

const { content } = require('../buttons.json');
const { descContent } = require('../../common.json');

export default function ButtonSizeVariants({ id }) {
  const [type, setType] = useState('M');
  const html = useRef();
  const desc = useRef();

  const getHTML = () => {
    switch (type) {
      case 'M':
        html.current = htmlSizeVariants.M;
        desc.current = content.sizeVariants.M;
        return <MaterialSizVarButton />;
      case 'B':
        html.current = htmlSizeVariants.B;
        desc.current = content.sizeVariants.B;
        return <BootstrapSizVarButton />;
      default:
        desc.current = descContent.defaultText;
        return <></>;
    }
  };

  return (
    <Interface
      componentID={id}
      heading={'Sizes & Variants'}
      content={desc}
      setType={setType}
      setHtml={getHTML}
      codeData={html}
    />
  );
}
