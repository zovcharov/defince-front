import ApiProvider from '../ApiProvider';
import {TopTokenType} from '../../types/tokens.types';

const CONTROLLER_NAME = 'top-tokens';

export const getDayTransactionsTokens = (): Promise<TopTokenType[]> =>
  ApiProvider.Get(CONTROLLER_NAME, 'day-transactions');

export const getDayVolumeTokens = (): Promise<TopTokenType[]> =>
  ApiProvider.Get(CONTROLLER_NAME, 'day-volume');

export const getHourTransactionTokens = (): Promise<TopTokenType[]> =>
  ApiProvider.Get(CONTROLLER_NAME, 'hour-transaction');

export const getHourVolumeTokens = (): Promise<TopTokenType[]> =>
  ApiProvider.Get(CONTROLLER_NAME, 'hour-volume');

export const getNewTokens = (): Promise<TopTokenType[]> =>
  ApiProvider.Get(CONTROLLER_NAME, 'new-tokens');