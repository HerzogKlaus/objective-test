import path from "path";
import webpack from 'webpack';
import {IBuildEnv, IBuildPaths, TBuildMode} from "./config/build/types/config";
import {buildWebpackConfig} from "./config/build/buildWebpackConfig";

export default (env: IBuildEnv): webpack.Configuration => {
	const paths: IBuildPaths = {
		entry: path.resolve(__dirname, "src", "main.ts"),
		output: path.resolve(__dirname, "build"),
		src: path.resolve(__dirname, "src"),
		html: path.resolve(__dirname, "public", "index.html")
	};

	const mode: TBuildMode = env.mode || "development";

	const isDev = mode === "development";

	const port: number = env.port || 3000;

	return buildWebpackConfig({
		paths,
		mode,
		port,
		isDev
	})
}