<template>
  <div class="bg-white p-6 rounded-lg shadow">
    <h2 class="text-xl font-semibold mb-4">{{ title }}</h2>
    <ul class="space-y-2">
      <li v-for="topic in topics" :key="topic.id">
        <button 
          @click="$emit('select', topic)"
          class="text-left w-full p-3 rounded-lg hover:bg-indigo-50 transition-colors duration-200"
        >
          <span class="font-medium text-gray-900">{{ topic.title }}</span>
        </button>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { Topic } from '../../types'

defineProps<{
  title: string
  topics: Topic[]
}>()

defineEmits<{
  (e: 'select', topic: Topic): void
}>()</script>