import React from 'react';

import { SearchToken } from '../../types/tokens.types';
import TokenIcon from "../../uikit/TokenIcon/TokenIcon";

import TokenAddressLink from "../../uikit/TokenAddressLink/TokenAddressLink";

import './SearchTokenInfo.scss';

const SearchTokenInfo = ({
  token: { address, symbol, name, isUp }
}: {
  token: SearchToken;
}): JSX.Element => {
  return (
    <div className="search-token-info">
      <TokenIcon name={name} address={address} size="l" />
      <div className="search-token-info__info">
        <div className="search-token-info__name">{name}</div>
        <div className="search-token-info__symbol">{symbol}</div>
      </div>
      <TokenAddressLink address={address} className="search-token-info__address" />
    </div>
  )
}

export default SearchTokenInfo;