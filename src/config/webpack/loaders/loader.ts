import { RuleSetRule } from 'webpack';

import { IWebpackConfigOptions } from '../types';
import { cssLoader } from './cssLoader';

export const webpackLoaders = (options: IWebpackConfigOptions): Array<RuleSetRule> => {
  const { isDevelopment } = options;
  const fileLoader = {
    loader: 'file-loader',
    options: {
      outputPath: 'media',
      name: '[name].[contenthash].[ext]',
      esModule: false,
    },
  };
  const tsLoader = {
    loader: 'ts-loader',
  };
  const svgLoader = {
    loader: '@svgr/webpack',
    options: {
      typescript: true,
      ext: 'tsx',
    },
  };
  const webpackCssLoader = cssLoader(isDevelopment);
  return [
    { test: /\.tsx?$/, use: [tsLoader], exclude: /node_modules/ },
    {
      test: /\.(png|jpe?g|gif|woff|woff2|mp4)$/i,
      use: [fileLoader],
    },
    {
      test: /\.svg$/,
      use: [svgLoader, fileLoader],
    },
    webpackCssLoader,
  ];
};
