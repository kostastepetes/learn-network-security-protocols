<template>
  <div class="bg-white rounded-lg shadow">
    <div class="p-4">
      <h2 class="text-lg font-medium text-gray-900 mb-4">Categories</h2>
      <nav class="space-y-2">
        <button
          v-for="category in categories"
          :key="category.id"
          :class="[
            'w-full flex items-center px-3 py-2 text-sm font-medium rounded-md',
            selectedCategory === category.id
              ? 'bg-indigo-100 text-indigo-700'
              : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
          ]"
          @click="$emit('select-category', category.id)"
        >
          {{ category.name }}
        </button>
      </nav>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  categories: Array<{ id: string; name: string }>
  selectedCategory: string
}>()

defineEmits<{
  (e: 'select-category', category: string): void
}>()</script>