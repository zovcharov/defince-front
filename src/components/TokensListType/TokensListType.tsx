import React from 'react';
import cn from 'classnames';

import './TokensListType.scss';

const TokensListType = ({
  title,
  onSelect,
  listKey,
  isActive,
}: {
  title: string;
  onSelect: (listKey: string) => void;
  listKey: string;
  isActive: boolean;
}): JSX.Element => {
  const handleClick = () => onSelect(listKey);

  return (
    <div className={cn('tokens-list-type', { 'tokens-list-type--active': isActive })} onClick={handleClick}>
      {title}
    </div>
  )
};

export default TokensListType;
