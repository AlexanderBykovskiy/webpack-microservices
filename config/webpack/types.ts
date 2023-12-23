export interface typeEnv {
    mode: string,
    port: number,
}

export interface typeWebpackConfigPaths {
    entry: string,
    output: string,
    static: string,
    html: string
}

export interface typeWebpackConfigOptions {
    port: number,
    mode: string,
    paths: typeWebpackConfigPaths,
    isDev: boolean,
}