import React, { useState, useRef } from 'react';
import Interface from '../../../components/Interface';
import { htmlDismiss } from '../alertsHtml';
import MaterialAlertDismiss from './Libs/MaterialAlertDismiss';
import BootstrapAlertDismiss from './Libs/BootstrapAlertDismiss';

const {
  content: { dismissable },
  links: { forAlertDismissable, materialAlertAPI, bootstrapAlertAPI },
} = require('../alerts.json');
const { descContent } = require('../../common.json');

export default function DismissAlert({ id }) {
  const [type, setType] = useState('M');
  const html = useRef();
  const desc = useRef();
  const link = useRef();

  const getHTML = () => {
    switch (type) {
      case 'M':
        desc.current = dismissable.M;
        html.current = htmlDismiss.M;
        link.current = forAlertDismissable.M || materialAlertAPI;
        return <MaterialAlertDismiss />;
      case 'B':
        desc.current = dismissable.B;
        html.current = htmlDismiss.B;
        link.current = forAlertDismissable.B || bootstrapAlertAPI;
        return <BootstrapAlertDismiss />;
      default:
        desc.current = descContent.defaultText;
        return <></>;
    }
  };

  return (
    <>
      <Interface
        componentID={id}
        heading={'Dismiss Alert'}
        content={desc}
        linkTo={link}
        setType={setType}
        setHtml={getHTML}
        codeData={html}
      />
    </>
  );
}
