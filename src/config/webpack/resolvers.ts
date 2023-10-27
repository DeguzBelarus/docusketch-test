import { ResolveOptions } from 'webpack';

import { IWebpackConfigOptions } from './types';

export const webpackResolvers = (options: IWebpackConfigOptions): ResolveOptions => {
  const {
    paths: { src },
  } = options;
  return {
    extensions: ['.tsx', '.ts', '.js'],
    preferAbsolute: true,
    modules: [src, 'node_modules'],
    mainFiles: ['index'],
  };
};
