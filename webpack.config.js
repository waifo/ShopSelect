var path = require("path");
var CopyWebpackPlugin=require('copy-webpack-plugin');
const ManifestPlugin = require('webpack-manifest-plugin');
var SWPrecacheWebpackPlugin = require('sw-precache-webpack-plugin');

var DIST_DIR = path.resolve(__dirname, "dist");
var SRC_DIR = path.resolve(__dirname, "src");

var config = {
    entry: SRC_DIR + "/app/App.tsx",
    output: {
        path: DIST_DIR + "/app",
        filename: "bundle.js",
        publicPath: "/app/"
    },
    devtool: "source-map",
    resolve: {
        // Add `.ts` and `.tsx` as a resolvable extension.
        extensions: ['.ts', '.tsx', '.js']
      },
    module: {
        loaders: [
            { 
                test: /\.tsx?$/, 
                loader: 'ts-loader'
            },
            {
                test: /\.css$/,
                loaders: [ 'style-loader', 'css-loader' ]
            },
            {
                test: /\.(png|jpg|svg)$/,  
                use: [{
                    loader: 'url-loader',
                    options: { 
                        limit: 8000, // Convert images < 8kb to base64 strings
                        name: 'images/[hash]-[name].[ext]'
                    } 
                }]
            }
        ],
        // preLoaders: [
        //     // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
        //     { test: /\.js$/, loader: "source-map-loader" }
        // ]
    },
    plugins: [
        new CopyWebpackPlugin([
            // {output}/file.txt 
           { from: SRC_DIR+'/index.html', to: DIST_DIR+'/index.html' }
        ]),
        new ManifestPlugin({
            fileName: 'asset-manifest.json', // Not to confuse with manifest.json 
          }),
          new SWPrecacheWebpackPlugin(
            {
              cacheId: 'my-project-name',
              dontCacheBustUrlsMatching: /\.\w{8}\./,
              filename: 'service-worker.js',
              minify: false,
              navigateFallback:'/index.html',
              staticFileGlobsIgnorePatterns: [/\.map$/, /asset-manifest\.json$/],
            }
          ),
        // new SWPrecacheWebpackPlugin({
        //     // By default, a cache-busting query parameter is appended to requests
        //     // used to populate the caches, to ensure the responses are fresh.
        //     // If a URL is already hashed by Webpack, then there is no concern
        //     // about it being stale, and the cache-busting can be skipped.
        //     dontCacheBustUrlsMatching: /\.\w{8}\./,
        //     filename: 'service-worker.js',
        //     logger(message) {
        //       if (message.indexOf('Total precache size is') === 0) {
        //         // This message occurs for every build and is a bit too noisy.
        //         return;
        //       }
        //       console.log(message);
        //     },
        //     minify: false, // minify and uglify the script
        //     navigateFallback: '/index.html',
        //     staticFileGlobsIgnorePatterns: [/\.map$/, /asset-manifest\.json$/],
        //   })
    ]
};

module.exports = config;