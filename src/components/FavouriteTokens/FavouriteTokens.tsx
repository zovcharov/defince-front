import React from 'react';

import { FavouriteTokensContextConsumer } from '../../contexts/favouriteTokensContext';
import Card from '../Card/Card';
import FavouriteTokenCard from '../FavouriteTokenCard/FavouriteTokenCard';

import './FavouriteTokens.scss';

const FavouriteTokens = (): JSX.Element => {
  return (
    <FavouriteTokensContextConsumer>
      {({ favouriteTokens }) => (
        <Card title="Favourites" className="favourites-tokens">
          <div className="favourites-tokens__list">
            {Object.entries(favouriteTokens).map(([symbol, address]) => (
              <FavouriteTokenCard key={address as string} address={address as string} symbol={symbol} />
            ))}
          </div>
        </Card>
      )}
    </FavouriteTokensContextConsumer>
  )
};

export default FavouriteTokens;