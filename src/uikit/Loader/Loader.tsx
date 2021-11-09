import React from 'react';

import './Loader.scss';

const Loader = ({
  children = null,
  isLoading = false,
}: {
  children?: React.ReactElement | null;
  isLoading: boolean;
}) => {
  if (isLoading) {
    return (
      <div
        className="loader"
      />
    );
  }

  if (children) {
    return <>{children}</>;
  }

  return null;
};

export default Loader;
