import React from 'react';

import HeaderNavigation from '../HeaderNavigation/HeaderNavigation';
import definceLogoWhite from '../../assets/definceLogoWhite.png';

import './Header.scss';

const Header = (): JSX.Element => {

  return (
    <header className="header">
      <div className="header__header-logo-wrapper">
        <img className="header__header-logo-icon" src={definceLogoWhite} alt="" />
        <div className="header__header-logo-text">DeFince</div>
      </div>
      <HeaderNavigation />
    </header>
  )
}

export default Header;