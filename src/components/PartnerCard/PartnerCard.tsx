import React from 'react';

import {DefincePartner} from "../../types/partners.types";

import './PartnerCard.scss';

const PartnerCard = ({ partner, onOpenPartner }: {
  partner: DefincePartner;
  onOpenPartner: (partner: DefincePartner) => void;
}) => {
  const {
    badges,
    twitter,
    web,
    contract,
    tg,
    description,
    logo,
    name,
  } = partner;

  return (
    <div className="partner-card" onClick={() => onOpenPartner(partner)}>
      <img className="partner-card__logo" src={logo} alt=""/>
      <h4 className="partner-card__name">{name}</h4>
      <div className="partner-card__desc">
        {description}
      </div>
      <div className="partner-card__badges">
        {badges.map((badge) => (
          <div className="partner-card__badge" key={badge}>{badge}</div>
        ))}
      </div>
    </div>
  )
}

export default PartnerCard;
