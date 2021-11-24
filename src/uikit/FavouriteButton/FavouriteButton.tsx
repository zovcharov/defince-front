import React from 'react';
import cn from 'classnames';

import './FavouriteButton.scss';

const FavouriteButton = ({
  isActive,
  onToggle
}: {
  isActive: boolean;
  onToggle: (checked: boolean) => void;
}): JSX.Element => {
  const cnFavouriteButton = cn('favourite-button', {
    'favourite-button--active': isActive,
  });

  const handleClick = () => onToggle(!isActive);

  return (
    <div className={cnFavouriteButton} onClick={handleClick}>
      <svg className="favourite-button__svg" viewBox='0 0 100 100' stroke="#fff">
        <g className="favourite-button__star">
          <path
            d="M 50 4 61.23 38.55 97.55 38.55 68.16 59.9 79.39 94.45 50 73.1 20.6 94.45 31.84 59.9 2.45 38.55 38.77 38.55 z"/>
          <path className="favourite-button__star-ex"
                d="M 50 4 61.23 38.55 97.55 38.55 68.16 59.9 79.39 94.45 50 73.1 20.6 94.45 31.84 59.9 2.45 38.55 38.77 38.55 z"/>
        </g>
      </svg>
    </div>
  )
}

export default FavouriteButton;
