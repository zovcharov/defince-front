import React from 'react'
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';

import Header from './components/Header/Header';
import HomePage from './pages/HomePage/HomePage';

const Router = (): JSX.Element => (
  <BrowserRouter>
    <Header />
    <Routes>
      <Route path="/home" element={<HomePage />} />
      <Route path="/" element={<Navigate replace to="/home" />} />
    </Routes>
  </BrowserRouter>
);

export default Router;
