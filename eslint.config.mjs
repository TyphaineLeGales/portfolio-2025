// eslint.config.mjs
import vue from 'eslint-plugin-vue'
import tailwind from 'eslint-plugin-tailwindcss'

/** @type {import("eslint").Linter.FlatConfig[]} */
export default [
  {
    ignores: ['.nuxt', 'dist'],
  },
  {
    files: ['**/*.vue'],
    languageOptions: {
      parser: await import('vue-eslint-parser'),
      parserOptions: {
        parser: await import('@typescript-eslint/parser'),
        ecmaVersion: 2022,
        sourceType: 'module',
      },
    },
    plugins: {
      vue,
      tailwindcss: tailwind,
    },
    rules: {
      ...vue.configs['flat/recommended'].rules,
      ...tailwind.configs['flat/recommended'][0].rules,
      'vue/html-indent': ['error', 2],
      'vue/no-v-html': 'off',
      'tailwindcss/no-custom-classname': 'off',
    },
  },
  {
    files: ['**/*.{ts,js}'],
    languageOptions: {
      parser: await import('@typescript-eslint/parser'),
      ecmaVersion: 2022,
      sourceType: 'module',
    },
   
    rules: {
      ...tailwind.configs['flat/recommended'][0].rules,
    },
  },
]
