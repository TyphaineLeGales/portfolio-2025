<script setup lang="ts">
import { slugify } from '#imports';
import { useProjects } from '@/composables/useProjects'
const {  t } = useI18n()
const { PROJECTS }= useProjects()

console.log(t("test", { returnObjects: true }))
console.log(t("welcome"))


</script>
<template>
  <GridContainer>
    <div class="col-span-full lg:col-start-2 lg:col-span-4">
      <div class="w-full sticky top-0 flex-col md:flex-row flex  z-50 h-1/3 items-center">
        <h1 class="text-center lg:text-left">Projects</h1>
        <p class="w-full md:hidden font-pp-light text-24 text-center"> Scroll to discover</p>
      </div>
      <ul class="z-50 h-[30%] overflow-scroll ">
        <li v-for="project in PROJECTS">
          <NuxtLink :to="`/project/${slugify(project.title)}`" class="font-pp-bold my-6px border-b-2 flex justify-between align-bottom pb-6px py-36px snap-mandatory animated-link">
            <h2 class="translate-y-18px w-full" :data-hover="project.title">{{ project.title }}</h2>
            <div class="size-40px bg-transparent md:size-64px rounded-md" data-arrow >
              <NuxtImg :src="`/${project.img}.png`" class="arrow-svg absolute"/>
            </div>
          </NuxtLink>
        </li>
      </ul>
    </div>
  </GridContainer>
</template>
