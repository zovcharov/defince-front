import ApiProvider from '../ApiProvider';
import {SearchToken, Token} from '../../types/tokens.types';

const CONTROLLER_NAME = 'token';

export const getTokenInfo = (address: string): Promise<Token> =>
  ApiProvider.Get(CONTROLLER_NAME, `info/${address}`);
export const searchToken = (searchString: string): Promise<SearchToken[]> =>
  ApiProvider.Get(CONTROLLER_NAME, '', { filter: searchString });
