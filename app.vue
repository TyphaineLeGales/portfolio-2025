<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
import GlslCanvas from 'glslCanvas'

const canvasRef = ref(null)
let sandbox = null

onMounted(() => {
  const canvas = canvasRef.value
  if (!canvas) return
    sandbox = new GlslCanvas(canvas)
    

 const updateMouseUniform = (e) => {
    const rect = canvas.getBoundingClientRect()
    const x = (e.clientX - rect.left) / rect.width
    const y = (e.clientY - rect.top) / rect.height
    sandbox.setUniform('u_mouse', [x * canvas.width, y * canvas.height])
  }

  window.addEventListener('mousemove', updateMouseUniform)

  // Optional: set size uniform
  sandbox.setUniform('u_resolution', [canvas.width, canvas.height])
})

</script>
<template>
  <NuxtPage
    :transition="{ mode: 'out-in' }"
  />
  <canvas ref="canvasRef" class="top-0 glslCanvas fixed size-full pointer-events-none -z-10" data-fragment-url="./shaders/bgShader.frag"></canvas>
</template>
