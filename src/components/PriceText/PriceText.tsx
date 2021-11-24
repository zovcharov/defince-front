import React from 'react';
import cn from 'classnames';

import './PriceText.scss';

export const PriceText = ({
  isUp,
  children,
  className = ''
}: {
  isUp?: boolean;
  children: React.ReactChild;
  className?: string
}): JSX.Element => {
  const cnPriceText = cn('price-text', {
    'price-text--up': isUp === true,
    'price-text--down': isUp === false,
    'price-text--default': isUp === undefined,
    [className]: className.length > 0,
  });

  return (
    <span className={cnPriceText}>
      {children}
    </span>
  )
}

export default PriceText;