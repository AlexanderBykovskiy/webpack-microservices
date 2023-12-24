import webpack from "webpack";
import {typeWebpackConfigOptions} from "./types";

export const getResolvers = (options: typeWebpackConfigOptions) => {

    const resolvers: webpack.Configuration['resolve'] = {
        extensions: ['.tsx', '.ts', '.js'],
        alias: {
            '@': options.paths.resource,
        }
    }

    return resolvers;

}
