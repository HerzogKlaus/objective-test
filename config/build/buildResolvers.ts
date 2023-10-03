import webpack from "webpack";
import {IBuildConfigOptions} from "./types/config";

export function buildResolvers(options: IBuildConfigOptions): webpack.ResolveOptions {
	return {
		extensions: [
			'.tsx',
			'.ts',
			'.js',
			'.vue'
		],
		preferAbsolute: true,
		modules: [options.paths.src, "node_modules"],
		mainFiles: ["index"],
	}
}