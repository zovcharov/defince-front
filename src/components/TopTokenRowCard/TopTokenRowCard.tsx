import React from 'react';
import cn from 'classnames';

import {TopTokenType} from '../../types/tokens.types';
import TokenIcon from '../../uikit/TokenIcon/TokenIcon';

import './TopTokenRowCard.scss';

const TopTokenRowCard = ({ token }: { token: TopTokenType }): JSX.Element => {
  const cnPriceChange = cn('top-token-row-card__price-change', {
    'top-token-row-card__price-change--up': token.isUp,
    'top-token-row-card__price-change--down': !token.isUp,
    'top-token-row-card__price-change--na': !token?.dayPriceChange,
  });

  const dayPriceChange = token?.dayPriceChange || 0;

  return (
    <div className="top-token-row-card">
      <div>
        <div className="top-token-row-card__header">
          <div className="top-token-row-card__icon">
            <TokenIcon name={token.name} size="m" />
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