import React, { useState } from 'react';
import {useQuery} from 'react-query';
import cn from 'classnames';

import {getTokenInfo} from '../../api/controllers/token.controller';
import Loader from '../../uikit/Loader/Loader';
import TokenIcon from '../../uikit/TokenIcon/TokenIcon';
import PriceText from '../PriceText/PriceText';
import { getShortNumber } from '../../utils/numberFormat';

import './FavouriteTokenCard.scss';
import Display from '../Display/Display';
import TokenAddressLink from '../../uikit/TokenAddressLink/TokenAddressLink';

const FavouriteTokenCard = ({
  address,
  symbol,
  name
}: {
  address: string,
  symbol: string,
  name: string
}): JSX.Element => {
  const [isOpen, changeIsOpen] = useState(false);

  const { data: token, isFetching, isFetched } = useQuery(
    ['favourite-token', address],
    () => getTokenInfo(address),
    {
      refetchOnWindowFocus: false,
      initialData: {
        symbol,
        address,
      },
      enabled: isOpen,
    }
  );

  const handleToggleExpand = () => changeIsOpen((prevState) => !prevState);

  const cnFavouriteTokenCard = cn('favourites-token-card', {
    'favourites-token-card--collapsed': !isOpen,
  });

  return (
    <div className={cnFavouriteTokenCard}>
      <div className="favourites-token-card__header" onClick={handleToggleExpand}>
        <TokenIcon name={name || token?.name || ''} size="l" address={address} />
        <div className="favourites-token-card__name-block">
          <div className="favourites-token-card__name">
            {name || token?.name}
          </div>
          <div className="favourites-token-card__symbol">
            {symbol || token?.symbol}
          </div>
        </div>
        {
          isFetched ? (
            <PriceText
              isUp={token?.dayPriceChange ? Math.sign(token?.dayPriceChange) > 0 : undefined}
              className="favourites-token-card__day-price-change"
            >
              <>{token?.usdtPrice?.toFixed(5) || 0} $</>
            </PriceText>
          ) : (
            <div className="favourites-token-card__expand-btn">Show more &darr;</div>
          )
        }
      </div>
      <Display isVisible={isOpen}>
        <Loader isLoading={isFetching}>
          <div className="favourites-token-card__body">
            <div>
              <div className="favourites-token-card__additional-row-item">
                <div className="favourites-token-card__additional-row-label">Total Supply:</div>
                <div className="favourites-token-card__additional-row-value">
                  {getShortNumber(token?.supply)}
                </div>
              </div>
              <div className="favourites-token-card__additional-row-item">
                <div className="favourites-token-card__additional-row-label">Liqudity pool:</div>
                <div className="favourites-token-card__additional-row-value">
                  {getShortNumber(token?.liquidityInUsdt || 0)} $
                </div>
              </div>
            </div>
            <div>
              <div className="favourites-token-card__additional-row-item">
                <div className="favourites-token-card__additional-row-label">Market Cap:</div>
                <div className="favourites-token-card__additional-row-value">
                  {getShortNumber(token?.marketCap) || 0} $
                </div>
              </div>
              <div className="favourites-token-card__additional-row-item">
                <div className="favourites-token-card__additional-row-label">Volume 24h:</div>
                <div className="favourites-token-card__additional-row-value">
                  {getShortNumber(token?.dayVolumeChange, 1)} %
                </div>
              </div>
            </div>
            <div className="favourites-token-card__additional-address-card">
              <TokenAddressLink address={address} className="favourites-token-card__address" />
            </div>
          </div>
        </Loader>
      </Display>
    </div>
  )
}

export default React.memo(FavouriteTokenCard);