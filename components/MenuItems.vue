<script setup>
const PROJECTS = ["Burotopia", "Bearing Gifts", "Forget me not", "Cartofaf", "Petits soins", "Leeway Arts", "Syndicalisme Hebdo", "Petite histoire de la Chimie", "R&D experiments", "Disguise Cloud"]
</script>
<template>
  <GridContainer class="mt-64px">
    <div class="col-span-full lg:col-start-2 lg:col-span-4">
      <h1 class="text-center lg:text-left w-full mb-56px">Projects</h1>
      <p class="w-full md:hidden font-pp-light text-24 text-center"> Scroll to discover</p>
      <ul>
        <li v-for="project in PROJECTS" class="font-pp-bold my-6px border-b-2"><h2>{{ project }}</h2></li>
      </ul>
    </div>
  </GridContainer>
</template>