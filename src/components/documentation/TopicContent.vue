<template>
  <div v-if="topic" class="prose max-w-none">
    <h2 class="text-2xl font-bold mb-4">{{ topic.title }}</h2>
    <p class="text-gray-700 mb-6">{{ topic.content }}</p>
    
    <div v-for="section in topic.sections" :key="section.title" class="mb-6">
      <h3 class="text-xl font-semibold mb-3">{{ section.title }}</h3>
      <p class="text-gray-700 mb-4">{{ section.content }}</p>
      
      <div v-if="section.subsections" class="ml-6">
        <div v-for="subsection in section.subsections" :key="subsection.title" class="mb-4">
          <h4 class="text-lg font-medium mb-2">{{ subsection.title }}</h4>
          <p class="text-gray-700">{{ subsection.content }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Topic } from '../../types'

defineProps<{
  topic: Topic | null
}>()</script>