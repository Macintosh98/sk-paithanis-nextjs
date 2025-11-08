import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  // Override default ignores of eslint-config-next.
  globalIgnores([
    // Default ignores of eslint-config-next:
    ".next/**",
    "out/**",
    "build/**",
    "next-env.d.ts",
    "react-hooks/exhaustive-deps",
    "react-refresh/only-export-components",
    "@typescript-eslint/no-unsafe-member-access",
    "@typescript-eslint/no-explicit-any",
    "@typescript-eslint/no-empty-function",
    "@typescript-eslint/no-unsafe-argument",
    "@typescript-eslint/no-unsafe-assignment",
    "@typescript-eslint/no-unsafe-call",
    "@typescript-eslint/no-unsafe-return",
    "@typescript-eslint/no-misused-promises",
    "@typescript-eslint/prefer-nullish-coalescing",
    "@typescript-eslint/prefer-for-of",
    "react-hooks/immutability",
    "react-hooks/set-state-in-effect",
    "react-hooks/refs",
  ]),
]);

export default eslintConfig;
