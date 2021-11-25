import React from 'react'
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';

import Header from './components/Header/Header';
import { FavouriteTokensContext } from './contexts/favouriteTokensContext';
import HomePage from './pages/HomePage/HomePage';

const Router = (): JSX.Element => (
  <BrowserRouter>
    <FavouriteTokensContext>
      <>
        <Header />
        <Routes>
          <Route path="/home" element={<HomePage />} />
          <Route path="/" element={<Navigate replace to="/home" />} />
        </Routes>
      </>
    </FavouriteTokensContext>
  </BrowserRouter>
);

export default Router;
