// @ts-check
// @ts-ignore
import tailwind from 'eslint-plugin-tailwindcss'
import withNuxt from './.nuxt/eslint.config.mjs'

export default withNuxt(
  ...tailwind.configs['flat/recommended'],
  {
    files: ['**/*.ts', '**/*.tsx', '**/*.vue'],
    rules: {
      'vue/no-v-html': 'off',
      'tailwindcss/no-custom-classname': 'off',
    },
  },
)
