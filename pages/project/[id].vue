<script setup>
import {useProjects} from '@/composables/useProjects'

const route = useRoute()
const { findProjectBySlug }= useProjects()
const project = findProjectBySlug(route.params.id)
</script>

<template>
  <GridContainer>
    <div class="col-span-full lg:col-start-2 lg:col-span-4">
      <h1>{{project.title}}</h1>
      <NuxtImg :src="`/${project.img}.png`" class="w-1/2"/>
    </div>
  </GridContainer>
</template>