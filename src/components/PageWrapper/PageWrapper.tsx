import React from 'react';

import './PageWrapper.scss';

const PageWrapper = ({ children }: { children: React.ReactNode }): JSX.Element => (
  <div className="page-wrapper">
    {children}
  </div>
);

export default PageWrapper;
