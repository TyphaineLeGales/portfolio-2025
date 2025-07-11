<script setup>
const PROJECTS = ["Burotopia", "Bearing Gifts", "Forget me not", "Cartofaf", "Petits soins", "Leeway Arts", "Syndicalisme Hebdo", "Petite histoire de la Chimie", "R&D experiments", "Disguise Cloud"]
</script>
<template>
  <div>
    <h1 class="font-pp-black text-blue-electric">Projects</h1>
    <ul>
      <li v-for="project in PROJECTS" class="font-pp-bold">{{ project }}</li>
    </ul>
  </div>
</template>