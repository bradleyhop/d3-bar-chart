module.exports = {
  pluginOptions: {
    lintStyleOnBuild: false,
    stylelint: {},
  },
  css: {
    loaderOptions: {
      sass: {
        additionalData: `
        @import '@/assets/color-variables.scss';
        `,
      },
    },
  },
};
