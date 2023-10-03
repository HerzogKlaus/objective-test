import {IBuildConfigOptions} from "./types/config";
import {buildPlugins} from "./buildPlugins";
import {buildLoaders} from "./buildLoaders";
import {buildResolvers} from "./buildResolvers";
import {buildDevServer} from "./buildDevServer";

export function buildWebpackConfig(options: IBuildConfigOptions) {
	return {
		mode: options.mode,
		devtool: options.isDev ? 'inline-source-map' : undefined,
		entry: options.paths.entry,
		output: {
			path: options.paths.output,
			filename: "[name].[contenthash].js",
			clean: true
		},
		plugins: buildPlugins(options),
		module: {
			rules: buildLoaders(options),
		},
		resolve: buildResolvers(options),
		devServer: options.isDev ? buildDevServer(options) : undefined
	}
}