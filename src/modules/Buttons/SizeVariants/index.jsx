import React, { useRef, useState } from 'react';
import Interface from '../../../components/Interface';
import MaterialSizVarButton from './Libs/MaterialSizVarButton';
import BootstrapSizVarButton from './Libs/BootstrapSizVarButton';
import { htmlSizeVariants } from '../buttonsHtml';

const {
  content: { sizeVariants },
  links: { forBtnSizeVariants, materialBtnAPI, bootstrapBtnAPI },
} = require('../buttons.json');
const { descContent } = require('../../common.json');

export default function ButtonSizeVariants({ id }) {
  const [type, setType] = useState('M');
  const html = useRef();
  const desc = useRef();
  const link = useRef();

  const getHTML = () => {
    switch (type) {
      case 'M':
        html.current = htmlSizeVariants.M;
        desc.current = sizeVariants.M;
        link.current = forBtnSizeVariants.M || materialBtnAPI;
        return <MaterialSizVarButton />;
      case 'B':
        html.current = htmlSizeVariants.B;
        desc.current = sizeVariants.B;
        link.current = forBtnSizeVariants.B || bootstrapBtnAPI;
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
      linkTo={link}
      setType={setType}
      setHtml={getHTML}
      codeData={html}
    />
  );
}
