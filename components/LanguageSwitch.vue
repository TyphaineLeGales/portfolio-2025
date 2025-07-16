<script setup>
const { locales, setLocale, t } = useI18n()
const route = useRoute()
const isEn = computed(() => route.fullPath.includes('en'))

console.log(locales, isEn.value)
// TODO - :class="{isEN && locale.name==='EN' ? 'font-pp-bold' : ''}" style selected
</script>
<template>
  <div class="m-6px">
    <button v-for="locale in locales" @click="setLocale(locale.code)">
      <p class="pl-6px" > {{ locale.name }}</p> 
    </button>
  </div>

</template>
<style scoped>


button:first-of-type p::after{
    content: " . "
}
</style>