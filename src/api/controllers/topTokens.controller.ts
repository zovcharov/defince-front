import ApiProvider from '../ApiProvider';
import {TopToken} from '../../types/tokens.types';

const CONTROLLER_NAME = 'top-tokens';

export const getDayTransactionsTokens = (): Promise<TopToken[]> =>
  ApiProvider.Get(CONTROLLER_NAME, 'day-transactions');

export const getDayVolumeTokens = (): Promise<TopToken[]> =>
  ApiProvider.Get(CONTROLLER_NAME, 'day-volume');

export const getHourTransactionTokens = (): Promise<TopToken[]> =>
  ApiProvider.Get(CONTROLLER_NAME, 'hour-transaction');

export const getHourVolumeTokens = (): Promise<TopToken[]> =>
  ApiProvider.Get(CONTROLLER_NAME, 'hour-volume');

export const getNewTokens = (): Promise<TopToken[]> =>
  ApiProvider.Get(CONTROLLER_NAME, 'new-tokens');