import webpack from "webpack";

export const getResolvers = () => {

    const resolvers: webpack.Configuration['resolve'] = {
        extensions: ['.tsx', '.ts', '.js'],
    }

    return resolvers;

}
