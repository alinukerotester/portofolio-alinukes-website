module.exports = {
  webpack: (config) => {
    config.output.hashFunction = 'xxhash64'; // Înlocuiește algoritmul de hash
    return config;
  },
};
