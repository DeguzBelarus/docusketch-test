export type IWebpackModeType = 'production' | 'development';

export interface IWebpackEnvironmentVariables {
  mode: IWebpackModeType;
  PORT?: number;
}

export interface IWebpackPaths {
  entry: string;
  build: string;
  html: string;
  src: string;
  favicon: string;
}

export interface IWebpackConfigOptions {
  mode: IWebpackModeType;
  paths: IWebpackPaths;
  isDevelopment: boolean;
  port: number;
}
