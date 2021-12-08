import React from 'react';

import { SearchToken } from '../../types/tokens.types';
import TokenIcon from "../../uikit/TokenIcon/TokenIcon";

import './SearchTokenInfo.scss';
import {useQuery} from "react-query";
import {getTokenInfo} from "../../api/controllers/token.controller";
import {getTokenPrice} from "../../api/controllers/price.controller";
import Display from "../Display/Display";
import PriceText from "../PriceText/PriceText";
import ExponentNumber from "../ExponentNumber/ExponentNumber";

const SearchTokenInfo = ({
  token: { address, symbol, name, isUp }
}: {
  token: SearchToken;
}): JSX.Element => {
  const { data: tokenSearchPrice, isFetching } = useQuery(
    ['search-token-price', address],
    () => getTokenPrice(address),
    {
      refetchOnWindowFocus: false,
      retry: false,
    }
  );

  return (
    <div className="search-token-info">
      <TokenIcon name={name} address={address} size="l" />
      <div className="search-token-info__info">
        <div className="search-token-info__name">{name}</div>
        <div className="search-token-info__symbol">{symbol}</div>
      </div>
      <Display isVisible={!isFetching}>
        <div className="search-token-info__price">
          <PriceText isUp={isUp}>
            <>
              <ExponentNumber value={tokenSearchPrice?.priceInUsdt || 0} /> $
            </>
          </PriceText>
        </div>
      </Display>
    </div>
  )
}

export default SearchTokenInfo;