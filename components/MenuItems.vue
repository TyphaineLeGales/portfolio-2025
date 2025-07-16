<script setup lang="ts">
import { slugify } from '#imports';
const PROJECTS:IProject[] = [{
  id: 0,
  title: "Burotopia",
  color: "blue",
  img: 'placeholder4'
  },
  {
    id: 1,
    title: "Bearing Gifts",
    color: "orange",
    img: 'placeholder5'
  }, 
  {
    id: 2,
    title: "Forget me not",
    color: "red",
    img: 'placeholder'
  }, 
  {
    id: 3,
    title:"Cartofaf",
    color: "yellow",
    img: 'placeholder6'
  }, 
  {
    id: 4,
    title: "Petits soins",
    color: "pink",
    img: 'placeholder2'
  }, {
    id: 5,
    title:"Leeway Arts", 
    color: "green",
    img: 'placeholder8'
  }, {
    id: 6,
    title: "Syndicalisme Hebdo",
    color: "orange",
    img: 'placeholder7'
  }, {
    id: 7,
    title:"Petite histoire de la Chimie",
    color: "red",
    img: 'placeholder3'
  }, {
    id: 8,
    title:"R&D experiments",
    color: "pink",
    img: 'placeholder'
    }, {
    id:9,
    title:"Disguise Cloud", 
    color: "blue",
    img: 'placeholder9'
  }]


</script>
<template>
  <GridContainer class="wrapper">
    <div class="col-span-full lg:col-start-2 lg:col-span-4">
      <div class="w-full sticky top-0 flex-col md:flex-row flex  z-50 h-1/3 items-center">
        <h1 class="text-center lg:text-left">Projects</h1>
        <p class="w-full md:hidden font-pp-light text-24 text-center"> Scroll to discover</p>
      </div>
      <ul class="z-50 h-[30%] overflow-scroll ">
        <li v-for="project in PROJECTS">
          <NuxtLink :to="`/project/${slugify(project.title)}`" class="font-pp-bold my-6px border-b-2 flex justify-between align-bottom pb-6px py-36px snap-mandatory animated-link">
            <h2 class="translate-y-18px w-full" :data-hover="project.title">{{ project.title }}</h2>
            <!-- <div class="size-40px md:size-64px rounded-md" data-arrow :class="`bg-${project.color}`"> -->
            <div class="size-40px bg-transparent md:size-64px rounded-md" data-arrow >
              <NuxtImg :src="`/${project.img}.png`" class="arrow-svg absolute"/>
            </div>
          </NuxtLink>
        </li>
      </ul>
    </div>
  </GridContainer>
</template>
<style lang="css" scoped>

.wrapper {
  /* background: rgba(255, 255, 255, 0.1);
	backdrop-filter: blur(30px);
	-webkit-backdrop-filter: blur(30px);
  color: #fff; */
}

</style>