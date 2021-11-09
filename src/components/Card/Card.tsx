import React from 'react';
import cn from 'classnames';

import './Card.scss';

const Card = ({
  children,
  title,
  className = '',
}: {
  children: React.ReactNode,
  title: string,
  className?: string
}): JSX.Element => (
  <div className={cn('card', { [className]: className?.length })}>
    <h3 className="card__header">{title}</h3>
    {children}
  </div>
);

export default Card;
