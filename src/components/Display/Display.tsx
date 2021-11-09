// @ts-nocheck
import React from 'react';

const Display = ({
  children,
  isVisible
}: {
  children: any;
  isVisible: boolean
}): JSX.Element => isVisible ? <>{children}</> : null;

export default Display;