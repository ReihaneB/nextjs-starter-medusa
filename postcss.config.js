module.exports = {
  plugins: {
    tailwindcss: {},
    cssnano: {},
    'postcss-flexbugs-fixes': {},
    'postcss-preset-env': {
      autoprefixer: {
        flexbox: 'no-2009',
      },
      browsers: '> 0.2% and not dead',
      stage: 2,
      features: {
        'custom-properties': false,
      },
    },
  },
};

