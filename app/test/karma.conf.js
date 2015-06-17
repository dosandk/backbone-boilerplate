// Karma configuration
// Generated on Tue Jun 16 2015 15:14:59 GMT+0300 (EEST)

module.exports = function (config) {
    config.set({

        // base path that will be used to resolve all patterns (eg. files, exclude)
        basePath: '../',

        // frameworks to use
        // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
        frameworks: ['jasmine'],

        // list of files / patterns to load in the browser
        files: [
            //'*.spoke.js',
            //'app/spec/*.js'
            'js/lib/jquery.js',
            'js/lib/underscore.js',
            'js/lib/backbone.js',

            'js/app.js',
            'js/data/apple-data.js',

            'templates/apple-item.tpl.js',
            'templates/apple-home.tpl.js',
            'templates/apple-spinner.tpl.js',
            'templates/apple.tpl.js',

            'js/apple-item-view.js',
            'js/apple-home-view.js',
            'js/apple-view.js',
            'js/apples.js',
            'js/apple-app.js',

            'test/unit/**/*.js'
        ],


        // list of files to exclude
        exclude: [],


        // preprocess matching files before serving them to the browser
        // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
        preprocessors: {},


        // test results reporter to use
        // possible values: 'dots', 'progress'
        // available reporters: https://npmjs.org/browse/keyword/karma-reporter
        reporters: ['progress'],


        // web server port
        port: 9876,


        // enable / disable colors in the output (reporters and logs)
        colors: true,


        // level of logging
        // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
        logLevel: config.LOG_INFO,


        // enable / disable watching file and executing tests whenever any file changes
        autoWatch: true,


        // start these browsers
        // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
        browsers: ['Chrome'],


        // Continuous Integration mode
        // if true, Karma captures browsers, runs the tests and exits
        singleRun: false
    });
};
