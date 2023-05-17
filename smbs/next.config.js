const path = require('path');

module.exports = {
    webpack: (config) => {
        config.resolve.alias['@'] = path.join(__dirname, 'src');
        config.resolve.alias['@mui'] = path.join(__dirname, 'node_modules', '@mui');
        return config;
    }
};
