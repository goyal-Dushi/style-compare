import React, { useContext, useRef } from 'react';
import { IconButton, Tooltip } from '@mui/material';
import { TypeContext } from '../App';

const {
  descContent: { defaultLink },
} = require('../modules/common.json');

function StyleToggleNav({ setStyleType, linkTo }) {
  const { types, imgSrc } = useContext(TypeContext);
  const linkHead = useRef(types.M);

  const toggleStyle = (type) => {
    linkHead.current = types[type];
    setStyleType(type);
  };

  return (
    <>
      <div className={'d-inline-block'}>
        {Object.entries(types)?.map(([key, value], index) => (
          <Tooltip
            key={key}
            arrow
            placement={'top-end'}
            title={<span style={{ fontSize: '18px' }}>{value}</span>}
          >
            <IconButton
              color={'inherit'}
              aria-label={`${value}-icon`}
              onClick={() => toggleStyle(key)}
            >
              {imgSrc[index] ? (
                <img
                  className={'d-block border shadow rounded-circle'}
                  height={'35px'}
                  width={'35px'}
                  src={imgSrc[index]}
                  alt={'css-lib-img'}
                />
              ) : (
                key
              )}
            </IconButton>
          </Tooltip>
        ))}
      </div>
      {linkTo && (
        <div className={'ps-1'}>
          {'View on '}
          <a
            target={'_blank'}
            href={linkTo?.current ? linkTo?.current : defaultLink}
            rel={'noreferrer'}
          >
            {linkHead?.current}
          </a>
        </div>
      )}
    </>
  );
}

export default StyleToggleNav;
