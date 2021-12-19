// @ts-nocheck
import React, {useState} from 'react';
import { useQuery } from 'react-query';

import { getDefincePartners } from '../../api/controllers/db.controller';
import Loader from '../../uikit/Loader/Loader';

import PartnerCard from '../PartnerCard/PartnerCard';
import {DefincePartner} from '../../types/partners.types';
import PartnerModal from "../../modals/PartnerModal/PartnerModal";

import './HomePartners.scss';

const HomePartners = () => {
  const [openedPartner, setOpenedPartner] = useState(null);
  const { data = [], isFetching } = useQuery(
    'defince-partners',
    () => getDefincePartners().then((partners: string[]) => partners.map(atob)),
    {
      refetchOnWindowFocus: false,
      initialData: [],
    }
  )

  const handleOpenPartner = (partner: DefincePartner) => setOpenedPartner(partner);
  const handleClosePartner = () => setOpenedPartner(null);

  return (
    <div className="defince-partners">
      <h3 className="defince-partners__title">Defince partners</h3>
      <Loader isLoading={isFetching}>
        <div className="defince-partners__list">
          {data.map((partner) => (
            <PartnerCard partner={JSON.parse(partner) as DefincePartner} key={partner.name} onOpenPartner={handleOpenPartner} />
          ))}
        </div>
      </Loader>
      <PartnerModal onClose={handleClosePartner} partner={openedPartner} />
    </div>
  )
}

export default HomePartners;
