export type TopToken = {
  address: string,
  name: string,
  symbol: string;
  usdtPrice?: number;
  isUp?: boolean;
  dayPriceChange?: number;
};


export type TokenLink = {
  name?: string;
  url?: string;
}

export type SearchToken = {
  address: string,
  name: string,
  symbol: string,
  isUp?: boolean
}

export type Token = {
  address: string;
  name?: string;
  symbol: string;
  usdtPrice?: number;
  marketCap?: number;
  supply?: number;
  liquidityInBnb?: number;
  liquidityInUsdt?: number;
  priceInBnb?: number;
  dayPriceChange?: number;
  volumeInUsdt?: number;
  dayVolumeChange?: number;
  webSite?: string;
  description?: string;
  links?: TokenLink[];
};

export type FavouriteTokensStoreType = {[key: string]: {
  address: string;
  name: string;
}};