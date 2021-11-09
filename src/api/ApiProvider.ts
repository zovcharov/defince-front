import axios from 'axios';

import config, { ConfigType } from './config';

class ApiProvider {
  private static instance: ApiProvider;
  private config: ConfigType;
  private apiUrl: string;

  constructor(config: ConfigType) {
    this.config = config;
    this.apiUrl = `${config.apiHost}:${config.apiPort}`;
  }

  public static getInstance(): ApiProvider {
    if (!ApiProvider.instance) {
      ApiProvider.instance = new ApiProvider(config);
    }

    return ApiProvider.instance;
  }

  Get(controller: string, param?: string, data?: {[key: string]: any}) {
    return axios({
      method: 'get',
      url: `http://${this.apiUrl}/api/${controller}/${param}`,
      data,
    })
      .then(({ data }) => data)
  }
}

export default ApiProvider.getInstance();
