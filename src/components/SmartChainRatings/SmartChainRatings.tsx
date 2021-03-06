import React, {useState} from 'react';
import {useQuery} from 'react-query';

import Card from '../Card/Card';
import TokensListType from '../TokensListType/TokensListType';
import {
  getDayTransactionsTokens,
  getDayVolumeTokens,
  getHourTransactionTokens,
  getHourVolumeTokens,
  getNewTokens
} from '../../api/controllers/topTokens.controller';

import TopTokenRowCard from '../TopTokenRowCard/TopTokenRowCard';
import Loader from '../../uikit/Loader/Loader';
import { FavouriteTokensContextConsumer } from '../../contexts/favouriteTokensContext';

import './SmartChainRatings.scss';

const topTokenSettings: {
  [key: string]: {
    title: string;
    request: () => Promise<any[]>;
  }
} = {
  DayTransactions: {
    title: 'Day transactions',
    request: getDayTransactionsTokens,
  },
  DayVolume: {
    title: 'Day volume',
    request: getDayVolumeTokens,
  },
  HourTransaction: {
    title: 'Hour transaction',
    request: getHourTransactionTokens,
  },
  HourVolume: {
    title: 'Hour volume',
    request: getHourVolumeTokens,
  },
  NewTokens: {
    title: 'New and hot',
    request: getNewTokens,
  }
}

const SmartChainRatings = (): JSX.Element => {
  const [selectedListKey, setSelectedListKey] = useState('DayTransactions');

  const {
    data: tokens = [],
    isFetching,
  } = useQuery(
    ['smart-chain-rating', selectedListKey],
    () => topTokenSettings[selectedListKey].request(),
    {
      refetchOnWindowFocus: false,
      staleTime: 5000,
      cacheTime: 5000,
    }
  )

  return (
    <Card title="Smart Chain Ratings" className="smart-chain-rating">
      <div className="smart-chain-rating__tokens-lists">
        {Object.entries(topTokenSettings).map(([tokensListKey, { title }]) => (
          <TokensListType
            key={tokensListKey}
            title={title}
            onSelect={setSelectedListKey}
            listKey={tokensListKey}
            isActive={tokensListKey === selectedListKey}
          />
        ))}
      </div>
      <FavouriteTokensContextConsumer>
        {({ toggleFavourite, isInFavourite }) => (
          <Loader isLoading={isFetching}>
            <div className="smart-chain-rating__tokens">
              {tokens.map((token) => (
                <TopTokenRowCard
                  key={token.symbol}
                  token={token}
                  isFavourite={isInFavourite(token.symbol)}
                  onToggleFavourite={toggleFavourite}
                />
              ))}
            </div>
          </Loader>
        )}
      </FavouriteTokensContextConsumer>
    </Card>
  )
}

export default SmartChainRatings;