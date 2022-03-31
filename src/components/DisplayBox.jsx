import React from 'react';

function DisplayBox({ children }) {
  return (
    <div
      className={
        'my-2 d-flex justify-content-around p-3 flex-wrap border border-dark rounded'
      }
    >
      {children}
    </div>
  );
}

export default DisplayBox;
