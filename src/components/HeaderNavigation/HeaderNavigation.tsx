import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import cn from 'classnames';

import './HeaderNavigation.scss';

const PATHS = [
  {
    title: 'Home',
    path: '/home',
  },
  {
    title: 'Charts',
    path: '/chart',
  },
  {
    title: 'Dex trades',
    path: '/dex-trades',
  },
]

const HeaderNavigation = (): JSX.Element => {
  const location = useLocation();

  const getNavLinkClassName = (path: string): string =>
    cn('header-navigation__link', {
      'header-navigation__link--active': path === location.pathname,
    })

  return (
    <nav className="header-navigation">
      {PATHS.map(({ path, title }) => (
        <Link to={path} className={getNavLinkClassName(path)} key={path}>{title}</Link>
      ))}
    </nav>
  )
}

export default HeaderNavigation;