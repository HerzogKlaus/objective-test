import type { Configuration as DevServerConfiguration } from 'webpack-dev-server';
import {IBuildConfigOptions} from "./types/config";

export function buildDevServer(options: IBuildConfigOptions): DevServerConfiguration  {
	return {
		port: options.port,
		open: true,
		historyApiFallback: true,
	}
}