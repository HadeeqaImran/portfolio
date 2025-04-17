import { defineConfig } from 'eslint-define-config';
import prettier from 'eslint-plugin-prettier';

export default defineConfig([
    // ESLint Recommended Rules
    {
        languageOptions: {
            globals: {
                require: 'readonly',
                module: 'readonly',
                __dirname: 'readonly',
            },
            parserOptions: {
                sourceType: 'module', // For ES Modules
            },
        },
        plugins: {
            prettier: prettier, // Add Prettier plugin as an object
        },
        rules: {
            'prettier/prettier': 'error', // Enforce Prettier formatting
        },
    },

    {
        plugins: {
            prettier: prettier,
        },
        rules: {
            'prettier/prettier': [
                'error',
                {
                    singleQuote: true,
                    semi: true,
                    tabWidth: 4,
                    trailingComma: 'es5',
                },
            ],
        },
    },
]);
