import { defineConfig } from "eslint/config";
import prettier from "eslint-plugin-prettier";
import globals from "globals";
import path from "node:path";
import { fileURLToPath } from "node:url";
import js from "@eslint/js";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
    baseDirectory: __dirname,
    recommendedConfig: js.configs.recommended,
    allConfig: js.configs.all
});

export default defineConfig([{
    extends: compat.extends("eslint:recommended", "prettier"),

    plugins: {
        prettier,
    },

    languageOptions: {
        globals: {
            ...globals.node,
        },

        ecmaVersion: 2017,
        sourceType: "commonjs",
    },

    rules: {
        "prettier/prettier": 2,

        "no-use-before-define": ["error", {
            functions: true,
            classes: true,
        }],

        "no-var": "error",
        "prefer-const": "error",
    },
}]);