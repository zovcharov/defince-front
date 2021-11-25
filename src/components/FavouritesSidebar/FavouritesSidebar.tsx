import React, { useRef } from 'react';
import { useLocation } from 'react-router-dom';

import useOutsideClick from '../../hooks/useOutsideClick';
import useHotkeys from '../../hooks/useHotkeys';
import FavouriteTokenCard from '../FavouriteTokenCard/FavouriteTokenCard';
import {FavouriteTokensContextConsumer} from '../../contexts/favouriteTokensContext';
import useNonInitialEffect from '../../hooks/useNonInitialEffect';

import {FavouriteTokensStoreType} from '../../types/tokens.types';

import './FavouritesSidebar.scss';
import BackButton from '../../uikit/BackButton/BackButton';

const FavouritesSidebar = ({
  isOpen,
  onClose
}: {
  isOpen: boolean;
  onClose: () => void;
}): JSX.Element | null => {
  const sidebarRef = useRef<HTMLDivElement>(null);
  const location = useLocation();

  useOutsideClick(sidebarRef, onClose);
  useHotkeys({
    Escape: onClose,
  });
  useNonInitialEffect(() => {
    onClose();
  }, [location]);

  if (!isOpen) {
    return <></>;
  }

  return (
    <div className="favourites-sidebar" ref={sidebarRef}>
      <div className="favourites-sidebar__header">
        <div className="favourites-sidebar__close-btn">
          <BackButton onClick={onClose} />
        </div>
        Favourites
      </div>
      <FavouriteTokensContextConsumer>
        {({ favouriteTokens }: { favouriteTokens: FavouriteTokensStoreType }) => {
          console.log(favouriteTokens)
          return (
            <div className="favourites-sidebar__list">
              {Object.entries(favouriteTokens).map(([symbol, { address, name }]) => (
                <FavouriteTokenCard key={address} address={address} symbol={symbol} name={name} />
              ))}
            </div>
          )
        }}
      </FavouriteTokensContextConsumer>
    </div>
  )
};

export default FavouritesSidebar;