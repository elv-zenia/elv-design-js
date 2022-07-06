module.exports = {
  "stories": [
    "../src/**/*.stories.mdx",
    "../src/components/**/*.story.@(js|jsx)",
    "../src/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-a11y",
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "@storybook/addon-a11y/register",
    "@storybook/addon-contexts/register",
    "@storybook/addon-backgrounds/register"
  ],
}
