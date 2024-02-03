// webpack.config.js
import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import SvgChunkWebpackPlugin from 'svg-chunk-webpack-plugin';

export default {
    entry: {
        todo_app: path.resolve() + '/src/frontend/todo_app/script.js',
        password_generator_system: path.resolve() + '/src/frontend/password_generator_system/index.js',
        calculator: path.resolve() + '/src/frontend/calculator/script.js',
        auth: path.resolve() + '/src/frontend/auth/index.js',
        main: path.resolve() + '/src/frontend/index.js',
    },
    output: {
        path: path.resolve() + '/dist',
        filename: '[name]/[name].bundle.js',
    },
    module: {
        rules: [
            {
                test: /\.(scss|css)$/,
                use: ['style-loader', 'css-loader'],
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve() + '/src/frontend/index.html',
            filename: 'main/index.html',
            chunks: ['main'],
        }),
        new HtmlWebpackPlugin({
            template: path.resolve() + '/src/frontend/todo_app/index.html', // шаблон
            filename: 'todo_app/index.html', // название выходного файла
            chunks: ['todo_app'],
        }),
        new HtmlWebpackPlugin({
            template: path.resolve() + '/src/frontend/calculator/index.html', // шаблон
            filename: 'calculator/index.html', // название выходного файла
            chunks: ['calculator'],
        }),
        new HtmlWebpackPlugin({
            template: path.resolve() + '/src/frontend/password_generator_system/index.html', // шаблон
            filename: 'password_generator_system/index.html', // название выходного файла
            chunks: ['password_generator_system'],
        }),

        new HtmlWebpackPlugin({
            template: path.resolve() + '/src/frontend/auth/login/index.html', // шаблон
            filename: 'login/index.html', // название выходного файла
            chunks: ['auth'],
        }),
        new HtmlWebpackPlugin({
            template: path.resolve() + '/src/frontend/auth/reg/index.html', // шаблон
            filename: 'reg/index.html', // название выходного файла
            chunks: ['auth'],
        }),
    ],
};