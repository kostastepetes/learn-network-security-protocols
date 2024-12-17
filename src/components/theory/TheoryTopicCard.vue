<template>
  <button 
    class="block w-full text-left bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200"
    @click="$emit('click')"
  >
    <h3 class="text-lg font-semibold text-gray-900 mb-2">{{ topic.title }}</h3>
    <p class="text-gray-600 mb-4">{{ topic.content }}</p>
    <div class="flex items-center text-sm text-indigo-600">
      Learn more
      <i class="pi pi-arrow-right ml-1"></i>
    </div>
  </button>
</template>

<script setup lang="ts">
import { Topic } from '../../types'

defineProps<{
  topic: Topic
}>()

defineEmits<{
  (e: 'click'): void
}>()</script>