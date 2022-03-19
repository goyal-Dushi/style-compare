import React, { useState, useRef } from 'react';
import Interface from '../../../components/Interface';
import { htmlVariants } from '../alertsHtml';
import MaterialAlertVariants from './Libs/MaterialAlertVariants';
import BootstrapAlertVariants from './Libs/BootstrapAlertVariants';

const {
  content: { variants },
  links: { forAlertVariants, materialAlertAPI, bootstrapAlertAPI },
} = require('../alerts.json');
const { descContent } = require('../../common.json');

export default function AlertVariants({ id }) {
  const [type, setType] = useState('M');
  const html = useRef();
  const desc = useRef();
  const link = useRef();

  const getHTML = () => {
    switch (type) {
      case 'M':
        html.current = htmlVariants.M;
        desc.current = variants.M;
        link.current = forAlertVariants.M || materialAlertAPI;
        return <MaterialAlertVariants />;
      case 'B':
        html.current = htmlVariants.B;
        desc.current = variants.B;
        link.current = forAlertVariants.B || bootstrapAlertAPI;
        return <BootstrapAlertVariants />;
      default:
        desc.current = descContent.defaultText;
        return <></>;
    }
  };

  return (
    <>
      <Interface
        componentID={id}
        heading={'Variants'}
        content={desc}
        linkTo={link}
        setType={setType}
        setHtml={getHTML}
        codeData={html}
      />
    </>
  );
}
