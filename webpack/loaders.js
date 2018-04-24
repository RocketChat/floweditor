exports.typingsForCssModulesLoader = (prod = false) => ({
    loader: 'typings-for-css-modules-loader',
    query: {
        modules: true,
        minimize: prod && true,
        banner:
            '// This file is automatically generated by the "typings-for-css-modules" Webpack loader.\n// https://github.com/Jimdo/typings-for-css-modules-loader\n',
        namedExport: true,
        camelCase: true,
        sourceMap: true,
        importLoaders: 2,
        localIdentName: '[name]__[local]___[hash:base64:5]'
    }
});

exports.postCSSLoader = {
    loader: 'postcss-loader',
    options: {
        ident: 'postcss',
        plugins: () => [require('autoprefixer')()]
    }
};

exports.awesomeTypeScriptLoader = (prod = false) => ({
    loader: 'awesome-typescript-loader',
    options: {
        useBabel: true,
        useCache: true,
        silent: process.argv.indexOf('--json') !== -1,
        watch: !prod
    }
});
