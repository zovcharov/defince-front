import React from 'react';

import PageWrapper from '../../components/PageWrapper/PageWrapper';
import SmartChainRatings from '../../components/SmartChainRatings/SmartChainRatings';
import FavouriteTokens from '../../components/FavouriteTokens/FavouriteTokens';

import { FavouriteTokensContext } from '../../contexts/favouriteTokensContext';

import './HomePage.scss';

const HomePage = (): JSX.Element => (
  <PageWrapper>
    <FavouriteTokensContext>
      <div className="home-page">
        <FavouriteTokens />
        <SmartChainRatings />
      </div>
    </FavouriteTokensContext>
  </PageWrapper>
);

export default HomePage;
