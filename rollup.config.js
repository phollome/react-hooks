import babel from "@rollup/plugin-babel";
import commonjs from "@rollup/plugin-commonjs";
import external from "rollup-plugin-peer-deps-external";
import resolve from "@rollup/plugin-node-resolve";
import pkg from "./package.json";

export default {
  input: "index.js",
  output: [
    {
      file: pkg.main,
      format: "cjs",
    },
    {
      file: pkg.module,
      format: "esm",
    },
  ],
  plugins: [
    external(),
    babel({
      exclude: "node_modules/**",
      babelHelpers: "bundled",
    }),
    resolve(),
    commonjs(),
  ],
};
