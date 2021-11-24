import ApiProvider from '../ApiProvider';
import {Token} from '../../types/tokens.types';

const CONTROLLER_NAME = 'token';

export const getTokenInfo = (address: string): Promise<Token> => ApiProvider.Get(CONTROLLER_NAME, `info/${address}`);
