import babel from 'rollup-plugin-babel'
import commonjs from 'rollup-plugin-commonjs'
import resolve from 'rollup-plugin-node-resolve'
import peerDepsExternal from 'rollup-plugin-peer-deps-external'
import { uglify } from 'rollup-plugin-uglify'

import packageJSON from './package.json'
const input = "./src/index.js"
const minifyExtension = pathToFile => pathToFile.replace(/\.js$/, ".min.js")

export default [
    {
        input,
        output: {
            file: packageJSON.main,
            format: "cjs"
        },
        plugins: [
            babel({
                exclude: "node_modules/**"
            }),
            peerDepsExternal(),
            resolve(),
            commonjs()
        ]
    },
    {
        input,
        output: {
            file: minifyExtension(packageJSON.main),
            format: "cjs"
        },
        plugins: [
            babel({
                exclude: "node_modules/**"
            }),
            peerDepsExternal(),
            resolve(),
            commonjs(),
            uglify()
        ]
    }
]