import React from 'react';

import PageWrapper from '../../components/PageWrapper/PageWrapper';
import SmartChainRatings from '../../components/SmartChainRatings/SmartChainRatings';
import HomePartners from '../../components/HomePartners/HomePartners';

import './HomePage.scss';

const HomePage = (): JSX.Element => (
  <PageWrapper>
    <div className="home-page">
      <HomePartners />
      <SmartChainRatings />
    </div>
  </PageWrapper>
);

export default HomePage;
