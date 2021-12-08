import React, {useEffect, useState} from 'react';

import { SearchToken } from '../../types/tokens.types';
import SearchTokenInfo from '../../components/SearchTokenInfo/SearchTokenInfo';
import Input from '../../uikit/Input/Input';
import { SearchIcon } from '../../uikit/Icons/Icons';

import './ChartsCommonPage.scss';
import {useQuery} from "react-query";
import {searchToken} from "../../api/controllers/token.controller";
import Loader from "../../uikit/Loader/Loader";
import useDebounce from "../../hooks/useDebounce";

const defaultTokens: SearchToken[] = [
  {
    'address': '0xeb14400ce8b952c5ff8507f964db5c218508debd',
    'name': 'Etherium',
    'symbol': 'ETHM',
    'isUp': false
  },
  {
    'address': '0xc00ebe3dc2805a77d778f625fa6146b5cbf42d53',
    'name': 'Bitcoin 2.0',
    'symbol': 'BTC',
    'isUp': false
  },
  {
    'address': '0xc7af920d37ab03fb134074572ab36b290259abcc',
    'name': 'SHIBSC',
    'symbol': 'SHIBA BSC',
    'isUp': false
  },
  {
    'address': '0x4206931337dc273a630d328da6441786bfad668f',
    'name': 'Dogecoin',
    'symbol': 'DOGE',
    'isUp': false
  },
]

const ChartsCommonPage = (): JSX.Element => {
  const [tokens, setTokens] = useState<SearchToken[]>(defaultTokens);
  const [searchString, setSearchString] = useState('');
  const debouncedSearchString = useDebounce(searchString, 500);

  const { data, isFetching, refetch } = useQuery(
    ['search-token', debouncedSearchString],
    () => {
      if (debouncedSearchString.trim().length > 0) {
        return searchToken(debouncedSearchString)
      }

      return Promise.resolve(defaultTokens);
    },
    {
      refetchOnWindowFocus: false,
      initialData: defaultTokens,
    }
  );

  const handleChangeSearchString = (value: string) => setSearchString(value);
  const handleSearch = () => {
    //refetch();
  }

  return (
    <div className="charts-common-page">
      <div className="charts-common-page__search">
        <Input
          placeholder="Search tokens by name address or symbol"
          value={searchString}
          onChange={handleChangeSearchString}
          renderIcon={() => <SearchIcon />}
          onPressEnter={handleSearch}
        />
      </div>
      <div className="charts-common-page__content">
        <Loader isLoading={isFetching}>
          <>
            {data?.map((token) => (
              <SearchTokenInfo key={token.address} token={token} />
            ))}
          </>
        </Loader>
      </div>
    </div>
  )
}

export default ChartsCommonPage;