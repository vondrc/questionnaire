module.exports = function (config) {
    config.set({
        // ... normal karma configuration

        files: [
            // all files ending in "_test"
            'node_modules/angular/angular.js',
            'node_modules/angular-mocks/angular-mocks.js',
            'app/*.spec.js',
            'app/**/*.spec.js'
            // each file acts as entry point for the webpack configuration
        ],

        preprocessors: {
            // add webpack as preprocessor
            'app/*.spec.js': ['webpack'],
            'app/**/*.spec.js': ['webpack']
        },

        webpack: {
            // you don't need to specify the entry option because
            // karma watches the test entry points
            // webpack watches dependencies

            // ... remainder of webpack configuration (or import)
        },
        frameworks: ['jasmine'],
        browsers: ['Chrome'],

        webpackMiddleware: {
            // webpack-dev-middleware configuration
            // i.e.
            noInfo: true,
            // and use stats to turn off verbose output
            stats: {
                // options i.e. 
                chunks: false
            }
        },

        plugins: [
            require("karma-webpack"),
            require("karma-jasmine"),
            require("karma-chrome-launcher")
        ]

    });
};