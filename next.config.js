module.exports = {
  future: {
    webpack5: true, // Activează Webpack 5
  },
  webpack: (config) => {
    config.resolve.fallback = {
      crypto: require.resolve('crypto-browserify'), // Oferă un fallback pentru 'crypto'
    };
    return config;
  },
};
