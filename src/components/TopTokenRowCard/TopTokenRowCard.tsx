import React from 'react';
import cn from 'classnames';

import {TopToken} from '../../types/tokens.types';
import TokenIcon from '../../uikit/TokenIcon/TokenIcon';
import FavouriteButton from '../../uikit/FavouriteButton/FavouriteButton';

import './TopTokenRowCard.scss';
import {apiUrl} from '../../api/config';

const TopTokenRowCard = ({
  token,
  isFavourite,
  onToggleFavourite
}: {
  token:TopToken;
  isFavourite: boolean;
  onToggleFavourite: (symbol: string, address: string, name: string) => void;
}): JSX.Element => {
  const cnPriceChange = cn('top-token-row-card__price-change', {
    'top-token-row-card__price-change--up': token.isUp,
    'top-token-row-card__price-change--down': !token.isUp,
    'top-token-row-card__price-change--na': !token?.dayPriceChange,
  });

  const dayPriceChange = token?.dayPriceChange || 0;

  const handleToggleFavourite = () => {
    onToggleFavourite(token.symbol, token.address, token.name);
  };

  return (
    <div className="top-token-row-card">
      <div className="top-token-row-card__favourite-icon">
        <FavouriteButton isActive={isFavourite} onToggle={handleToggleFavourite} />
      </div>
      <div>
        <div className="top-token-row-card__header">
          <div className="top-token-row-card__icon">
            <TokenIcon name={token.name} size="m" address={token.address} />
          </div>
          <div className="top-token-row-card__title">{token.name}</div>
        </div>
        <div className="top-token-row-card__price">
          {token.usdtPrice}
        </div>
      </div>
      <div className={cnPriceChange}>
        {
          token?.dayPriceChange ? (
            <>
              {token.isUp ? '+' : '-'} {Math.abs(dayPriceChange).toFixed(2)} %
            </>
          ) : (
            <>
              NA
            </>
          )
        }
      </div>
    </div>
  )
};

export default TopTokenRowCard;