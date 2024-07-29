import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";
import postcss from 'rollup-plugin-postcss';

export default {
    input: "src/index.ts",
    output: {
        file: "dist/index.js",
        format: "esm",
        sourcemap: true,
    },
    plugins: [
        resolve(),
        commonjs(),
        typescript({
            tsconfig: "./tsconfig.json",
            declaration: true,
            declarationDir: 'dist',
        }),
        postcss({
            extract: false,
            use: ["sass"]
        }),
    ],
    external: ['react', 'react-dom'],
};