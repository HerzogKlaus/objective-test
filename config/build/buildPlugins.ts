import webpack from "webpack";
import HtmlWebpackPlugin from "html-webpack-plugin";
import {IBuildConfigOptions} from "./types/config";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import CssMinimizerPlugin from "css-minimizer-webpack-plugin";
import {VueLoaderPlugin} from "vue-loader";

export function buildPlugins(options: IBuildConfigOptions): webpack.WebpackPluginInstance[] {
	return [
		new webpack.ProgressPlugin(),
		new HtmlWebpackPlugin({
			template: options.paths.html
		}),
		new MiniCssExtractPlugin({
			filename: "[name].[contenthash].css",
			chunkFilename: 'css/[name].[contenthash:8].css',
		}),
		new CssMinimizerPlugin(),
		new VueLoaderPlugin(),
		new webpack.DefinePlugin({
			__VUE_OPTIONS_API__: true,
			__VUE_PROD_DEVTOOLS__: false,
		}),
	]
}