const path = require('path');
const webpack = require('webpack');
const HTMLPlugin = require('html-webpack-plugin');
const ExtractTextWebpackPlugin = require('extract-text-webpack-plugin');

const isDev = process.env.NODE_ENV === 'development';

const config = {
    target: 'web',

    // path.join(): 将__dirname 与后面的路径拼接起来，形成一个绝对路径
    entry: path.join(__dirname, 'src/index.js'),
    
    output: {
        filename: 'bundle.[hash:8]js',
        path: path.join(__dirname, 'dist')
    },

    module: {
        rules: [
            {
                test: /\.vue$/,
                use: 'vue-loader'
            },
            {
                test: /\.jsx$/,
                use: 'babel-loader'
            },
            {
                test: /\.(png|jpg|jpeg|gif|svg)$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 1024,
                            name: '[name]-aaa.[ext]'
                        }
                    }
                ]
            }
        ]
    },

    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: isDev ? '"development"' : '"production"'
            }
        }),
        
        new HTMLPlugin()
    ]
};

// 用环境变量区分运行环境
if (isDev) {
    config.module.rules.push(
        {
            test: /\.styl/,
            use: [
                'style-loader',
                'css-loader',
                {
                    loader: 'postcss-loader',
                    options: {
                        sourceMap: true,
                        importLoaders: 1
                    }
                },
                'stylus-loader'
            ]
        }
    );

    // 开发过程中，调试工具
    config.devtool = '#cheap-module-eval-source-map';

    config.devServer = {
        port: 3000,
        host: '0.0.0.0',
        // 编译时有错误，直接显示在网页上
        overlay: {
            errors: true
        },
        // 启动webpack-dev-server时，会自动打开浏览器
        // open: false,
        // 当某个组件改变时，不重新渲染整个页面，而是重新加载某部分
        hot: true
    };

    config.plugins.push(
        // 与上面的hot属性配合使用
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoEmitOnErrorsPlugin(),
    )
} else {
    config.entry = {
        app: path.join(__dirname, 'src/index.js'),
        // 单独打包第三方库文件
        vendor: ['vue']
    };

    config.output.filename = '[name].[chunkHash:8].js';

    config.module.rules.push(
        {
            test: /\.styl/,
            use: ExtractTextWebpackPlugin.extract({
                fallback: 'style-loader',
                use: [
                    'css-loader',
                    {
                        loader: 'postcss-loader',
                        options: {
                            sourceMap: true,
                            importLoaders: 1
                        }
                    },
                    'stylus-loader'
                ]
            })
        }
    )

    config.plugins.push(
        new ExtractTextWebpackPlugin({
            filename: 'style.[contentHash:8].css'
        }),

        // 配合vendor使用
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendor'
        }),
        // 将webpack相关代码单独打包（上面的vendor必须放在runtime的前面）
        new webpack.optimize.CommonsChunkPlugin({
            name: 'runtime'
        })
    )
}

module.exports = config;