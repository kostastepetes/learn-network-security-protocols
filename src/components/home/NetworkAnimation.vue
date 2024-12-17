<template>
  <div ref="container" class="w-full h-full opacity-20"></div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import * as d3 from 'd3'

const container = ref<HTMLElement | null>(null)

onMounted(() => {
  if (!container.value) return

  const width = container.value.clientWidth
  const height = container.value.clientHeight

  const svg = d3.select(container.value)
    .append('svg')
    .attr('width', width)
    .attr('height', height)

  // Create nodes
  const nodes = Array.from({ length: 50 }, (_, i) => ({
    id: i,
    x: Math.random() * width,
    y: Math.random() * height,
    radius: Math.random() * 3 + 2
  }))

  // Create links between nearby nodes
  const links = []
  for (let i = 0; i < nodes.length; i++) {
    for (let j = i + 1; j < nodes.length; j++) {
      const dx = nodes[i].x - nodes[j].x
      const dy = nodes[i].y - nodes[j].y
      const distance = Math.sqrt(dx * dx + dy * dy)
      if (distance < 100) {
        links.push({ source: nodes[i], target: nodes[j], distance })
      }
    }
  }

  // Draw links
  svg.selectAll('line')
    .data(links)
    .enter()
    .append('line')
    .attr('x1', d => d.source.x)
    .attr('y1', d => d.source.y)
    .attr('x2', d => d.target.x)
    .attr('y2', d => d.target.y)
    .style('stroke', '#fff')
    .style('stroke-width', 0.5)
    .style('stroke-opacity', d => 1 - d.distance / 100)

  // Draw nodes
  svg.selectAll('circle')
    .data(nodes)
    .enter()
    .append('circle')
    .attr('cx', d => d.x)
    .attr('cy', d => d.y)
    .attr('r', d => d.radius)
    .style('fill', '#fff')

  // Animate nodes
  function animate() {
    nodes.forEach(node => {
      node.x += (Math.random() - 0.5) * 0.5
      node.y += (Math.random() - 0.5) * 0.5
    })

    svg.selectAll('circle')
      .attr('cx', d => d.x)
      .attr('cy', d => d.y)

    svg.selectAll('line')
      .attr('x1', d => d.source.x)
      .attr('y1', d => d.source.y)
      .attr('x2', d => d.target.x)
      .attr('y2', d => d.target.y)

    requestAnimationFrame(animate)
  }

  animate()
})
</script>