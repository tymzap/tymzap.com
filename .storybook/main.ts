import { StorybookConfig } from "@storybook/nextjs";
import { Configuration } from "webpack";
import { VanillaExtractPlugin } from "@vanilla-extract/webpack-plugin";
import { TransformOptions } from "@babel/core";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import path from "path";

const config: StorybookConfig = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@chromatic-com/storybook",
    "@storybook/addon-interactions",
    {
      name: "@storybook/addon-styling-webpack",
      options: {
        plugins: [new VanillaExtractPlugin(), new MiniCssExtractPlugin()],
        rules: [
          {
            test: /\.css$/,
            sideEffects: true,
            use: [
              require.resolve("style-loader"),
              {
                loader: require.resolve("css-loader"),
                options: {},
              },
            ],
            exclude: /\.vanilla\.css$/,
          },
          {
            test: /\.vanilla\.css$/i,
            sideEffects: true,
            use: [
              MiniCssExtractPlugin.loader,
              {
                loader: require.resolve("css-loader"),
                options: {
                  url: false,
                },
              },
            ],
          },
        ],
      },
    },
    "storybook-next-intl",
  ],
  webpackFinal: (webpackConfig) => {
    addSvgrLoader(webpackConfig);

    return webpackConfig;
  },
  babel: (babelConfig: TransformOptions) => {
    babelConfig?.plugins?.push([
      "module-resolver",
      {
        alias: {
          "~/*": path.resolve("./src"),
        },
      },
    ]);
  },
  framework: {
    name: "@storybook/nextjs",
    options: {},
  },
  staticDirs: ["../public"],
};

export default config;

function addSvgrLoader(webpackConfig: Configuration) {
  const svgRule = webpackConfig.module?.rules?.find((rule) => {
    if (
      rule &&
      typeof rule !== "string" &&
      "test" in rule &&
      rule.test instanceof RegExp
    ) {
      return rule.test.test(".svg");
    }
  });

  if (svgRule && typeof svgRule !== "string") {
    svgRule.exclude = /\.svg$/;
  }

  webpackConfig.module?.rules?.push({
    test: /\.svg$/,
    use: ["@svgr/webpack"],
  });
}
