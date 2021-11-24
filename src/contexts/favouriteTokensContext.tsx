import React, {useEffect, useState} from 'react';

import omit from '../utils/omit';

const { Provider, Consumer } = React.createContext({
  favouriteTokens: {},
  addToFavourite: (symbol: string, address: string) => {},
  removeFromFavourite: (symbol: string) => {},
  toggleFavourite: (symbol: string, address: string) => {},
  isInFavourite: (symbol: string): boolean => false,
});

const FAVOURITES_TOKENS_STORE_KEY = 'favouriteTokens'

type FavouriteTokensStoreType = {[key: string]: string};

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

  const addToFavourite = (symbol: string, address: string) => {
    setFavouriteTokens((prevState: FavouriteTokensStoreType) => ({
      ...prevState,
      [symbol]: address,
    }));
  };

  const removeFromFavourite = (symbol: string) => {
    setFavouriteTokens((prevState: FavouriteTokensStoreType) => omit(prevState, [symbol]));
  };

  const toggleFavourite = (symbol: string, address: string) => {
    if (isInFavourite(symbol)) {
      removeFromFavourite(symbol);
    } else {
      addToFavourite(symbol, address);
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
