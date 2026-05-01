import js from '@eslint/js'
import pluginVue from 'eslint-plugin-vue'
import globals from 'globals'

export default [
  js.configs.recommended,
  ...pluginVue.configs['flat/recommended'],
  {
    files: ['**/*.vue'],
    rules: {
      'vue/multi-word-component-names': 'off',
      'no-unused-vars': 'warn'
    }
  },
  {
    files: ['**/*.js', '**/*.ts'],
    languageOptions: {
      globals: globals.browser
    },
    rules: {
      'no-unused-vars': 'warn'
    }
  },
  {
    ignores: ['node_modules/**', 'dist/**', 'docs/**']
  }
]
