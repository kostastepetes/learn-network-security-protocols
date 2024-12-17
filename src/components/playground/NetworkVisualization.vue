<template>
  <div class="bg-white p-6 rounded-lg shadow-lg">
    <div class="flex justify-between items-center mb-6">
      <h2 class="text-xl font-semibold text-gray-900">{{ title }}</h2>
      <div class="flex gap-2">
        <button 
          v-for="control in controls"
          :key="control.id"
          class="px-3 py-1 rounded-md text-sm font-medium"
          :class="[
            control.active 
              ? 'bg-indigo-600 text-white' 
              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
          ]"
          @click="control.action"
        >
          {{ control.label }}
        </button>
      </div>
    </div>
    
    <div ref="container" class="w-full h-96 border rounded-lg bg-gray-50"></div>
    
    <div class="mt-4">
      <p class="text-sm text-gray-600">{{ description }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, watch, computed } from 'vue'
import { VisualizationType } from '../../types/visualization'
import { useVisualizationStore } from '../../stores/visualization'

const props = defineProps<{
  type: VisualizationType
}>()

const container = ref<HTMLElement | null>(null)
const visualizationStore = useVisualizationStore()

const title = computed(() => visualizationStore.getTitle(props.type))
const description = computed(() => visualizationStore.getDescription(props.type))

const controls = ref([
  { id: 'play', label: 'Play', active: false, action: startAnimation },
  { id: 'pause', label: 'Pause', active: false, action: pauseAnimation },
  { id: 'reset', label: 'Reset', active: false, action: resetVisualization }
])

function startAnimation() {
  visualizationStore.startAnimation(props.type, container.value)
  controls.value = controls.value.map(control => ({
    ...control,
    active: control.id === 'play'
  }))
}

function pauseAnimation() {
  visualizationStore.pauseAnimation(props.type)
  controls.value = controls.value.map(control => ({
    ...control,
    active: control.id === 'pause'
  }))
}

function resetVisualization() {
  clearVisualization()
  createVisualization()
  controls.value = controls.value.map(control => ({
    ...control,
    active: false
  }))
}

const clearVisualization = () => {
  if (!container.value) return
  container.value.innerHTML = ''
}

const createVisualization = () => {
  if (!container.value) return
  visualizationStore.createVisualization(props.type, container.value)
}

watch(() => props.type, () => {
  clearVisualization()
  createVisualization()
})

onMounted(() => {
  createVisualization()
})
</script>