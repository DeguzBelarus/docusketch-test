import { Configuration } from 'webpack';

import { webpackConfig } from './src/config/webpack/config';
import { IWebpackEnvironmentVariables } from './src/config/webpack/types';
import { WEBPACK_PATHS as paths } from './src/config/webpack/constants';

export default (webpackEnvironmentVariables: IWebpackEnvironmentVariables): Configuration => {
  const mode = webpackEnvironmentVariables.mode || 'development';
  const PORT = Number(webpackEnvironmentVariables.PORT) || 3000;
  const isDevelopment = mode === 'development';
  return webpackConfig({
    mode,
    paths,
    isDevelopment,
    port: PORT,
  });
};
