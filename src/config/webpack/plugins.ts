import { DefinePlugin, ProgressPlugin, WebpackPluginInstance } from 'webpack';
import HTMLWebpackPlugin from 'html-webpack-plugin';
import MiniCSSExtractPlugin from 'mini-css-extract-plugin';
import ReactRefreshWebpackPlugin from '@pmmmwh/react-refresh-webpack-plugin';
import { CleanWebpackPlugin } from 'clean-webpack-plugin';

import { IWebpackConfigOptions } from './types';

export const webpackPlugins = (options: IWebpackConfigOptions) => {
  const {
    paths: { html, favicon },
    isDevelopment,
  } = options;
  let webpackPlugins: Array<WebpackPluginInstance> = [];
  const cleanWebpackPlugin = new CleanWebpackPlugin();
  const htmlWebpackPlugin = new HTMLWebpackPlugin({
    template: html,
    filename: 'index.html',
    favicon,
  });
  const progressPlugin = new ProgressPlugin();
  const defineVariablesPlugin = new DefinePlugin({
    __IS_DEVELOPMENT__: JSON.stringify(isDevelopment),
  });
  if (isDevelopment) {
    const reactRefreshWebpackPlugin = new ReactRefreshWebpackPlugin();
    webpackPlugins = [...webpackPlugins, reactRefreshWebpackPlugin];
  } else {
    const miniCSSExtractPlugin = new MiniCSSExtractPlugin({
      filename: 'css/[name].[contenthash:8].css',
      chunkFilename: 'css/[name].[contenthash:8].css',
    });
    webpackPlugins = [...webpackPlugins, miniCSSExtractPlugin];
  }
  webpackPlugins = [
    ...webpackPlugins,
    cleanWebpackPlugin,
    htmlWebpackPlugin,
    progressPlugin,
    defineVariablesPlugin,
  ];
  return webpackPlugins;
};
