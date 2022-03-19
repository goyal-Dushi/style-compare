import React, { useEffect, useRef, useState } from 'react';
import Interface from '../components/Interface';

const { material, bootstrap, contentDesc } = require('./installation.json');
const { descContent: defaultHeading } = require('../modules/common.json');

export default function Installation() {
  const [type, setType] = useState('M');
  const [data, setData] = useState({
    html: material.install,
    heading: material.heading,
  });
  const desc = useRef(contentDesc);

  useEffect(() => {
    switch (type) {
      case 'M':
        setData({
          html: material.install,
          heading: material.heading,
        });
        break;
      case 'B':
        setData({
          html: bootstrap.install,
          heading: bootstrap.heading,
        });
        break;
      default:
        setData({
          heading: defaultHeading,
        });
        break;
    }
  }, [type]);

  return (
    <>
      <h1 className={'display-4 fw-bold'}>{' Installation '}</h1>
      <Interface
        heading={data.heading}
        content={desc}
        setType={setType}
        codeData={data.html}
      />
    </>
  );
}
