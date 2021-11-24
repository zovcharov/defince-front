import React from 'react';
import {useQuery} from 'react-query';

import {getTokenInfo} from '../../api/controllers/token.controller';
import Loader from '../../uikit/Loader/Loader';

import './FavouriteTokenCard.scss';
import TokenIcon from '../../uikit/TokenIcon/TokenIcon';
import PriceText from '../PriceText/PriceText';

const FavouriteTokenCard = ({ address, symbol }: { address: string, symbol: string }): JSX.Element => {
  const { data: token, isFetching } = useQuery(
    ['favourite-token', address],
    () => getTokenInfo(address),
    {
      refetchOnWindowFocus: false,
      initialData: {
        symbol,
        address,
      },
    }
  );

  return (
    <div className="favourites-token-card">
      <Loader isLoading={isFetching}>
        <>
          <div className="favourites-token-card__header">
            <TokenIcon name={token?.name || ''} size="l" />
            <div className="favourites-token-card__name-block">
              <div className="favourites-token-card__name">
                {token?.name}
              </div>
              <div className="favourites-token-card__symbol">
                {token?.symbol}
              </div>
            </div>
            <PriceText
              isUp={token?.dayPriceChange ? Math.sign(token?.dayPriceChange) > 0 : undefined}
              className="favourites-token-card__day-price-change"
            >
              {token?.dayPriceChange?.toFixed(4) || 0}
            </PriceText>
          </div>
        </>
      </Loader>
    </div>
  )
}

export default FavouriteTokenCard;