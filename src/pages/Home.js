import React from 'react';

export default function Home() {
  return (
    <div className={'w-75'}>
      <h1 className={'display-3 fw-bold'}> Welcome to LibCompare </h1>
      <p className={'fs-5'}>
        The purpose of this documentation is to provide short and to-the-point
        evaluation and documentation of various components and their respective
        visual representation provided by different CSS styling libraries.
        <br />
        <br />
        While developing websites, it becomes very difficult to decide which CSS
        lib to use based on the component UI they provide and it is a tiresome
        job to go through each of the CSS library’s docs and draw comparison
        across each of them, like how they are different, what is unique about
        each component they provide and much more.
        <br />
        <br />
        Thus, I decided to start with this documentation so that instead of
        going through long component documentation, we Frontend developers could
        get major comparison differences across various components provided by
        multiple CSS libraries out there.
      </p>
      <h3 className={'display-3 fw-bold'}> Aim </h3>
      <p className={'fs-5'}>
        My aim is to make this documentation useful, to the point and short,
        covering all major differences across various component styles and their
        respective features provided by all major/minor CSS libraries out there
        so as to act as a one stop solution for all Frontend Developers to be
        able to easily evaluate these libraries and choose decisively.
      </p>
    </div>
  );
}
