<template>
  <div class="bg-white/10 backdrop-blur rounded-xl p-6 hover:bg-white/15 transition-colors">
    <h3 class="text-xl font-semibold text-white mb-2">{{ topic.title }}</h3>
    <p class="text-indigo-200 mb-4">{{ topic.description }}</p>
    <ul class="space-y-2">
      <li 
        v-for="item in topic.items" 
        :key="item"
        class="text-indigo-300 flex items-center gap-2"
      >
        <i class="pi pi-check text-green-400"></i>
        {{ item }}
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { PreviewTopic } from '../../types'

defineProps<{
  topic: PreviewTopic
}>()</script>