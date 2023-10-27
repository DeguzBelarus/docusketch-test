import { Configuration as WebpackDevServerConfiguration } from 'webpack-dev-server';

import { IWebpackConfigOptions } from './types';

export const webpackDevServer = (options: IWebpackConfigOptions): WebpackDevServerConfiguration => {
  const { port } = options;
  return {
    port,
    open: true,
    historyApiFallback: true,
    hot: true,
    client: {
      logging: 'info',
      progress: true,
      reconnect: true,
    },
  };
};
