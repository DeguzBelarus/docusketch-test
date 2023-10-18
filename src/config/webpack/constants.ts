import { join } from 'path';

import { IWebpackPaths } from './types';

export const WEBPACK_PATHS: IWebpackPaths = {
  entry: join(__dirname, '../../../', 'src', 'index.tsx'),
  build: join(__dirname, '../../../', 'build'),
  html: join(__dirname, '../../../', 'public', 'index.html'),
  src: join(__dirname, '../../../', 'src'),
  favicon: join(__dirname, '../../../', 'public', 'favicon.jpg'),
};
