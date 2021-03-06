module.exports = {
  webpack: (config, { dev, isServer }) => {
    // Swap React with Preact in the client production build
    // @see https://youtu.be/R59e1Vl5lO8?t=177
    if (!dev && !isServer) {
      Object.assign(config.resolve.alias, {
        react: 'preact/compat',
        'react-dom/test-utils': 'preact/test-utils',
        'react-dom': 'preact/compat',
      });
    }

    return config;
  },
};
