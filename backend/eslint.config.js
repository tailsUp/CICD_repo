import globals from "globals";

export default [
    {
        languageOptions: {
            ecmaVersion: 2022,
            sourceType: "module",
            globals: {
                ...globals.browser,
                ...globals.node,
                myCustomGlobal: "readonly"
            }
        },
        'env': {
            'commonjs': true,
            'es2021': true,
            'node': true
        },
        'overrides': [
            {
                'env': {
                    'node': true
                },
                'files': [
                    '.eslintrc.{js,cjs}'
                ],
                'parserOptions': {
                    'sourceType': 'script'
                }
            }
        ],
        'parserOptions': {
            'ecmaVersion': 'latest'
        },
        plugins: [
            '@stylistic/js'
        ],
        'extends': 'eslint:recommended',
        'rules': {
            '@stylistic/js/indent': [
                'error',
                2
            ],
            '@stylistic/js/linebreak-style': [
                'error',
                'unix'
            ],
            '@stylistic/js/quotes': [
                'error',
                'single'
            ],
            '@stylistic/js/semi': [
                'error',
                'never'
            ],
            'eqeqeq': 'error',
            'no-trailing-spaces': 'error',
            'object-curly-spacing': [
                'error', 'always'
            ],
            'arrow-spacing': [
                'error', { 'before': true, 'after': true }
            ],
            'no-console': 0,
        }
    }
];