<script setup lang="ts">
import { slugify } from '#imports';
// import gsap, from 'gsap';

// gsap.registerPlugin(SplitText)
const PROJECTS:IProject[] = [{
  id: 0,
  title: "Burotopia",
  color: "pink"
  },
  {
    id: 1,
    title: "Bearing Gifts",
    color: "orange"
  }, 
  {
    id: 2,
    title: "Forget me not",
    color: "blue"
  }, 
  {
    id: 3,
    title:"Cartofaf",
    color: "yellow"
  }, 
  {
    id: 4,
    title: "Petits soins",
    color: "red"
  }, {
    id: 5,
    title:"Leeway Arts", 
    color: "green"
  }, {
    id: 6,
    title: "Syndicalisme Hebdo",
    color: "orange"
  }, {
    id: 7,
    title:"Petite histoire de la Chimie",
    color: "red"
  }, {
    id: 8,
    title:"R&D experiments",
    color: "pink"
    }, {
    id:9,
    title:"Disguise Cloud", 
    color: "blue"
  }]
</script>
<template>
  <GridContainer>
    <div class="col-span-full lg:col-start-2 lg:col-span-4">
      <div class="w-full pb-[20vh] sticky top-0 pt-64px bg-white z-10">
        <h1 class="text-center lg:text-left">Projects</h1>
        <p class="w-full md:hidden font-pp-light text-24 text-center"> Scroll to discover</p>
      </div>
      <ul class="pb-48px">
        <li v-for="project in PROJECTS">
          <NuxtLink :to="`/project/${slugify(project.title)}`" class="font-pp-bold my-6px border-b-2 flex justify-between align-bottom pb-6px py-36px snap-mandatory animated-link">
            <h2 class="translate-y-16px " :data-hover="project.title">{{ project.title }}</h2>
            <div class="size-40px md:size-50px rounded-md" :class="`bg-${project.color}`"></div>
          </NuxtLink>
        </li>
      </ul>
    </div>
  </GridContainer>
</template>