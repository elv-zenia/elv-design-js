// const MiniCssExtractPlugin = require('mini-css-extract-plugin');
// const path = require("path");

module.exports = {
  "stories": [
    "../.storybook/**/*.stories.mdx",
    "../src/components/**/*.story.@(js|jsx)"
  ],
  "addons": [
    "@storybook/addon-a11y",
    "@storybook/addon-links",
    {
      name: "@storybook/addon-essentials",
      options: {
        actions: true,
        backgrounds: false,
        controls: true,
        docs: true,
        toolbars: true,
        viewport: true
      }
    },
    "@storybook/addon-interactions",
    "@storybook/addon-a11y/register",
    "@storybook/addon-contexts/register",
    // "@storybook/addon-backgrounds/register"
  ],
  // core: {
  //   builder: "webpack5"
  // },
  // webpack(config) {
  //   config.module.rules.push({
  //     test: /\.s?css$/,
  //     sideEffects: true,
  //     use: [
  //       {
  //         loader:
  //           process.env.NODE_ENV === "production"
  //             ? MiniCssExtractPlugin.loader
  //             : "style-loader",
  //       },
  //       {
  //         loader: "css-loader",
  //         options: {
  //           importLoaders: 2,
  //           sourceMap: true,
  //         },
  //       },
  //       {
  //         loader: "postcss-loader",
  //         options: {
  //           postcssOptions: {
  //             plugins: [
  //               require("autoprefixer")({
  //                 overrideBrowserslist: ["last 1 version"],
  //               }),
  //             ],
  //           },
  //           sourceMap: true,
  //         },
  //       },
  //       {
  //         loader: "sass-loader",
  //         options: {
  //           additionalData(content) {
  //             return content;
  //           },
  //           sassOptions: {
  //             implementation: require("sass"),
  //             includePaths: [
  //               path.resolve(__dirname, "..", "node_modules"),
  //               path.resolve(__dirname, "..", "..", "..", 'node_modules'),
  //             ],
  //           },
  //           sourceMap: true,
  //         },
  //       },
  //     ],
  //   });
  //
  //   if (process.env.NODE_ENV === "production") {
  //     config.plugins.push(
  //       new MiniCssExtractPlugin({
  //         filename: "[name].[contenthash].css",
  //       })
  //     );
  //   }
  //
  //   return config;
  // }
}
