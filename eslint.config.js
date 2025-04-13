import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import tseslint from 'typescript-eslint'

export default tseslint.config(
  { ignores: ['dist'] },
  {
    extends: [
      // Use the recommended configs, but override their severity levels
      ...Object.entries(js.configs.recommended.rules).map(([rule, config]) => [
        rule,
        config === 'error' ? 'warn' : config
      ]),
      ...tseslint.configs.recommended.map(config => ({
        ...config,
        rules: Object.fromEntries(
          Object.entries(config.rules || {}).map(([rule, severity]) => [
            rule,
            severity === 'error' || severity[0] === 2 ? ['warn', ...(Array.isArray(severity) ? severity.slice(1) : [])] : severity
          ])
        )
      }))
    ],
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
    plugins: {
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
    },
    rules: {
      ...Object.fromEntries(
        Object.entries(reactHooks.configs.recommended.rules).map(([rule, severity]) => [
          rule,
          severity === 'error' || severity[0] === 2 ? ['warn', ...(Array.isArray(severity) ? severity.slice(1) : [])] : severity
        ])
      ),
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],
    },
  },
)
