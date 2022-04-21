const NodePolyfillPlugin = require('node-polyfill-webpack-plugin');

configureWebpack: (config) => {
    const plugin = [];
    plugin.push(new NodePolyfillPlugin());
}

module.exports = {
    publicPath: '/',
    outputDir: 'dist',
    assetsDir: 'assets',
    pwa: {
        name: 'fantzulin',
        iconPaths: {
            faviconSVG: 'img/favicon.ico',
            favicon32: 'img/favicon.ico',
            favicon16: 'img/favicon.ico',
            appleTouchIcon: 'img/favicon.ico',
            maskIcon: 'img/favicon.ico',
            msTileImage: 'img/favicon.ico'
        }
    }
}