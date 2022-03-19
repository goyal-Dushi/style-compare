import React, { useCallback, useState, useRef } from 'react';
import MaterialAlertColors from './Libs/MaterialAlertColors';
import BootstrapAlertColor from './Libs/BootstrapAlertColor';
import { htmlColor } from '../alertsHtml';
import Interface from '../../../components/Interface';

const { content } = require('../alerts.json');
const { descContent } = require('../../common.json');

export default function AlertColors({ id }) {
  const [type, setType] = useState('M');
  const html = useRef();
  const desc = useRef();

  const getHTML = useCallback(() => {
    switch (type) {
      case 'M':
        html.current = htmlColor.M;
        desc.current = content.colors.M;
        return <MaterialAlertColors />;
      case 'B':
        html.current = htmlColor.B;
        desc.current = content.colors.B;
        return <BootstrapAlertColor />;
      default:
        desc.current = descContent.defaultText;
        return <></>;
    }
  }, [type]);

  return (
    <Interface
      componentID={id}
      heading={'Colors & Icons'}
      content={desc}
      setType={setType}
      setHtml={getHTML}
      codeData={html}
    />
  );
}
