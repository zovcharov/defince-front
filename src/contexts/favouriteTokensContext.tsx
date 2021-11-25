import React, {useEffect, useState} from 'react';

import omit from '../utils/omit';
import {FavouriteTokensStoreType} from '../types/tokens.types';

const { Provider, Consumer } = React.createContext({
  favouriteTokens: {},
  addToFavourite: (symbol: string, address: string, name: string) => {},
  removeFromFavourite: (symbol: string) => {},
  toggleFavourite: (symbol: string, address: string, name: string) => {},
  isInFavourite: (symbol: string): boolean => false,
});

const FAVOURITES_TOKENS_STORE_KEY = 'favouriteTokens'

const FavouriteTokensContext = ({ children }: { children: React.ReactElement }) => {
  const [favouriteTokens, setFavouriteTokens] = useState<FavouriteTokensStoreType>(
    () => {
      const saved = window.localStorage.getItem(FAVOURITES_TOKENS_STORE_KEY);

      if (saved !== null) {
        return JSON.parse(saved);
      }

      return {};
    }
  );

  useEffect(() => {
    window.localStorage.setItem(FAVOURITES_TOKENS_STORE_KEY, JSON.stringify(favouriteTokens));
  }, [favouriteTokens]);

  const addToFavourite = (symbol: string, address: string, name: string) => {
    setFavouriteTokens((prevState: FavouriteTokensStoreType) => ({
      ...prevState,
      [symbol]: {
        address,
        name,
      },
    }));
  };

  const removeFromFavourite = (symbol: string) => {
    setFavouriteTokens((prevState: FavouriteTokensStoreType) => omit(prevState, [symbol]));
  };

  const toggleFavourite = (symbol: string, address: string, name: string) => {
    if (isInFavourite(symbol)) {
      removeFromFavourite(symbol);
    } else {
      addToFavourite(symbol, address, name);
    }
  };

  const isInFavourite = (symbol: string): boolean => favouriteTokens[symbol] !== undefined;

  const contextValue = {
    favouriteTokens,
    addToFavourite,
    removeFromFavourite,
    isInFavourite,
    toggleFavourite,
  }

  return (
    <Provider
      value={contextValue}
    >
      {children}
    </Provider>
  )
}

export { FavouriteTokensContext, Consumer as FavouriteTokensContextConsumer };
