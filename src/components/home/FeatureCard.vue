<template>
  <div class="bg-white/10 backdrop-blur rounded-xl p-6 hover:bg-white/15 transition-colors">
    <div class="w-12 h-12 bg-indigo-500 rounded-lg flex items-center justify-center mb-4">
      <i :class="`pi pi-${icon} text-xl text-white`"></i>
    </div>
    <h3 class="text-xl font-semibold text-white mb-2">{{ title }}</h3>
    <p class="text-indigo-200">{{ description }}</p>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  title: string
  description: string
  icon: string
}>()</script>