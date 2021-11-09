export type ConfigType = {
  apiHost: string;
  apiPort: string;
};

const config: ConfigType = {
  apiHost: '84.252.138.11',
  apiPort: '5101',
}

export const apiUrl = `${config.apiHost}:${config.apiPort}`;

export default config;