import commonjs from "@rollup/plugin-commonjs";
import nodeResolve from "@rollup/plugin-node-resolve";
import typescript from "@rollup/plugin-typescript";

export default {
  input: "src/index.ts",
  plugins: [nodeResolve({ preferBuiltins: false }), commonjs(), typescript()],
};
