import webpack from "webpack";
import {IBuildConfigOptions} from "./types/config";
import MiniCssExtractPlugin from "mini-css-extract-plugin";

export function buildLoaders(options: IBuildConfigOptions): webpack.RuleSetRule[] {
	const vueLoader = {
		test: /\.vue$/,
		use: {
			loader: 'vue-loader',
		},
		exclude: /node_modules/,
	}

	const typescriptLoader = {
		test: /\.tsx?$/,
		use: {
			loader: 'ts-loader',
			options: {
				appendTsSuffixTo: [/\.vue$/],
			}
		},
		exclude: /node_modules/,
	}

	const styleLoader = {
		test: /\.s[ac]ss$/i,
		use: [
			options.isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
			'css-loader',
			'sass-loader'
		],
	}

	const imageLoader = {
			test: /\.(png|svg|jpg|jpeg|gif)$/i,
			type: 'asset/resource',
	}

	return [typescriptLoader, vueLoader, styleLoader, imageLoader]
}