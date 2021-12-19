import React from 'react';
import { FaTelegramPlane, FaTwitter, FaLink } from 'react-icons/fa';

import BaseModal from '../../uikit/BaseModal/BaseModal';
import {DefincePartner} from '../../types/partners.types';

import './PartnerModal.scss';

const PartnerModal = ({ onClose, partner }: {
  onClose: () => void;
  partner: DefincePartner;
}): JSX.Element | null => {
  if (!partner) {
    return null;
  }

  const { logo, name, description, badges, twitter, web, tg } = partner;

  return (
    <BaseModal onClose={onClose} isOpen={!!partner}>
      <div className="partner-modal">
        <img className="partner-modal__logo" src={logo} alt={name} />
        <h2 className="partner-modal__name">{name}</h2>
        <div className="partner-modal__desc">
          {description}
        </div>
        <div className="partner-modal__badges">
          {badges.map((badge) => (
            <div className="partner-modal__badge" key={badge}>
              {badge}
            </div>
          ))}
        </div>
        <div className="partner-modal__socials">
          <a href={tg} target="_blank" className="partner-modal__social">
            <FaTelegramPlane color="#fff" size={20} />
          </a>
          <a href={twitter} target="_blank" className="partner-modal__social">
            <FaTwitter color="#fff" size={20} />
          </a>
          <a href={web} target="_blank" className="partner-modal__social">
            <FaLink color="#fff" size={20} />
          </a>
        </div>
      </div>
    </BaseModal>
  )
}

export default PartnerModal;