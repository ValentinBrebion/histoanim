import js from '@eslint/js'
import pluginVue from 'eslint-plugin-vue'

export default [
  js.configs.recommended,
  ...pluginVue.configs['flat/vue3-recommended'],
  {
    rules: {
      'vue/multi-word-component-names': 'off',
      'no-unused-vars': 'warn'
    }
  }
]
