import React, {useState} from 'react';
import { useLocation, Link } from 'react-router-dom';
import cn from 'classnames';

import './HeaderNavigation.scss';
import FavouritesSidebar from '../FavouritesSidebar/FavouritesSidebar';

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
  {
    title: 'Wallet',
    path: '/wallet',
  },
]

const HeaderNavigation = (): JSX.Element => {
  const location = useLocation();
  const [isFavouritesOpen, setIsFavouritesOpen] = useState(false);

  const handleOpenFavourites = () => setIsFavouritesOpen(true);
  const handleCloseFavourites = () => setIsFavouritesOpen(false);

  const getNavLinkClassName = (path: string): string =>
    cn('header-navigation__link', {
      'header-navigation__link--active': path === location.pathname,
    })

  return (
    <nav className="header-navigation">
      {PATHS.map(({ path, title }) => (
        <Link to={path} className={getNavLinkClassName(path)} key={path}>{title}</Link>
      ))}
      <div className="header-navigation__favourites" onClick={handleOpenFavourites}>
        <svg viewBox='0 0 100 100' stroke="#D9A72C">
          <g>
            <path
              strokeWidth="4"
              d="M 50 4 61.23 38.55 97.55 38.55 68.16 59.9 79.39 94.45 50 73.1 20.6 94.45 31.84 59.9 2.45 38.55 38.77 38.55 z"/>
          </g>
        </svg>
      </div>

      <FavouritesSidebar isOpen={isFavouritesOpen} onClose={handleCloseFavourites} />
    </nav>
  )
}

export default HeaderNavigation;