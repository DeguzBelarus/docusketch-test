import { RuleSetRule } from 'webpack';
import { loader as MiniCSSExtractLoader } from 'mini-css-extract-plugin';

export const cssLoader = (isDevelopment: boolean): RuleSetRule => {
  const styleLoader = isDevelopment ? 'style-loader' : MiniCSSExtractLoader;
  const cssLoader = {
    loader: 'css-loader',
    options: {
      modules: {
        auto: (resPath: string) => resPath.includes('.module.'),
        localIdentName: isDevelopment ? '[path][name]_[hash:base64:5]' : '[hash:base64:8]',
      },
    },
  };
  const sassLoader = {
    loader: 'sass-loader',
  };
  return {
    test: /\.scss$/i,
    use: [styleLoader, cssLoader, sassLoader],
  };
};
