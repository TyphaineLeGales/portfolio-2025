<script lang="ts" setup>
type SplittedType = false | 'left' | 'right'

const props = defineProps({
  isSplitted: {
    type: [Boolean, String] as PropType<SplittedType>,
    default: false,
  },
  tag: {
    type: String,
    default: 'div',
  },
})


</script>

<template>
  <component
    :is="tag"
    class="mx-auto grid w-full grid-rows-1 gap-y-[12px] grid-cols-6 gap-x-32px px-16px md:px-24px 2xl:grid-cols-16 2xl:max-w-screen-2xl 2xl:px-32px"
  >
    <slot />
  </component>
</template>