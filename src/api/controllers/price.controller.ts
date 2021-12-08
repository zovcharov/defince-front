import ApiProvider from '../ApiProvider';

import {TokenPrice} from '../../types/prices.types';

const CONTROLLER_NAME = 'price';

export const getTokenPrice = (address: string): Promise<TokenPrice> =>
  ApiProvider.Get(CONTROLLER_NAME, '', { filter: address });
