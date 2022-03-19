import React, { useState } from 'react';

export default function RightSideNav({ values, scrollRef }) {
  const [selectedText, setSelectedText] = useState(values[0]);
  const handleOptionSelect = (e) => {
    setSelectedText(e.currentTarget.innerText);
  };

  return (
    <aside className={'position-fixed end-0 top-20'} style={{ width: '20%' }}>
      <h5 className={'mx-auto w-50'}>
        <u>On This Page</u>
      </h5>
      <ul
        id={'rightNav'}
        className={'mx-auto w-50 h-auto ps-0 list-group list-group-flush'}
      >
        {values?.map((item, i) => (
          <a
            key={item}
            onClick={(e) => handleOptionSelect(e)}
            style={{ textDecoration: 'none' }}
            href={scrollRef[i]}
          >
            <li
              className={
                selectedText === item
                  ? 'list-group-item list-group-item-action list-group-item-info'
                  : 'list-group-item list-group-item-action'
              }
            >
              {item}
            </li>
          </a>
        ))}
      </ul>
    </aside>
  );
}
