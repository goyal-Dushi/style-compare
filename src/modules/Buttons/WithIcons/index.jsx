import React, { useState, useRef } from 'react';
import MaterialBtnIcon from './Libs/MaterialBtnIcon';
import BootstrapBtnIcon from './Libs/BootstrapBtnIcon';
import Interface from '../../../components/Interface';
import { htmlWithIcons } from '../buttonsHtml';

const {
  content: { icons },
  links: { forBtnIcons, materialBtnAPI, bootstrapBtnAPI },
} = require('../buttons.json');
const { descContent } = require('../../common.json');

export default function WithIcons({ id }) {
  const [type, setType] = useState('M');
  const html = useRef();
  const desc = useRef();
  const link = useRef();

  const getHTML = () => {
    switch (type) {
      case 'M':
        html.current = htmlWithIcons.M;
        desc.current = icons.M;
        link.current = forBtnIcons.M || materialBtnAPI;
        return <MaterialBtnIcon />;
      case 'B':
        html.current = htmlWithIcons.B;
        desc.current = icons.B;
        link.current = forBtnIcons.B || bootstrapBtnAPI;
        return <BootstrapBtnIcon />;
      default:
        desc.current = descContent.defaultText;
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
