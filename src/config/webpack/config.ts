import { Configuration } from 'webpack';
import { Configuration as WebpackDevServerConfiguration } from 'webpack-dev-server';

import { IWebpackConfigOptions } from './types';
import { webpackDevServer } from './devServer';
import { webpackResolvers } from './resolvers';
import { webpackPlugins } from './plugins';
import { webpackLoaders } from './loaders/loader';

interface IWebpackConfigWithDevServer extends Configuration {
  devServer: WebpackDevServerConfiguration;
}

export const webpackConfig = (options: IWebpackConfigOptions): IWebpackConfigWithDevServer => {
  const { mode, paths, isDevelopment } = options;
  const { build, entry } = paths;
  return {
    mode,
    entry,
    output: {
      filename: 'js/[name].[contenthash].js',
      chunkFilename: 'js/[name].[contenthash].js',
      path: build,
      publicPath: '/',
    },
    plugins: webpackPlugins(options),
    module: {
      rules: webpackLoaders(options),
    },
    resolve: webpackResolvers(options),
    devtool: isDevelopment ? 'eval-cheap-module-source-map' : undefined,
    devServer: isDevelopment ? webpackDevServer(options) : undefined,
  };
};
