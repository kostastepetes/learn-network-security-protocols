<template>
  <div class="min-h-screen bg-gray-50">
    <div class="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
      <h1 class="text-3xl font-bold text-gray-900 mb-8">Network Security Theory</h1>

      <div class="grid grid-cols-12 gap-6">
        <!-- Sidebar -->
        <div class="col-span-12 md:col-span-3">
          <TheorySidebar 
            :categories="categories"
            :selectedCategory="selectedCategory"
            @select-category="handleCategorySelect"
          />
        </div>

        <!-- Main Content -->
        <div class="col-span-12 md:col-span-9">
          <div class="bg-white rounded-lg shadow">
            <div class="border-b border-gray-200">
              <nav class="flex space-x-8 px-6" aria-label="Topics">
                <button
                  v-for="category in categories"
                  :key="category.id"
                  :class="[
                    'py-4 px-1 border-b-2 font-medium text-sm whitespace-nowrap',
                    selectedCategory === category.id
                      ? 'border-indigo-500 text-indigo-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  ]"
                  @click="handleCategorySelect(category.id)"
                >
                  {{ category.name }}
                </button>
              </nav>
            </div>

            <div class="p-6">
              <TheoryContent 
                :topics="currentTopics"
                :selectedTopic="selectedTopic"
                @select-topic="handleTopicSelect"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import TheorySidebar from '../components/theory/TheorySidebar.vue'
import TheoryContent from '../components/theory/TheoryContent.vue'
import { useTheoryStore } from '../stores/theory'

const theoryStore = useTheoryStore()
const selectedCategory = ref('network')
const selectedTopic = ref<string | null>(null)

const categories = [
  { id: 'network', name: 'Networking' },
  { id: 'protocols', name: 'Protocols' },
  { id: 'security', name: 'Security' }
]

const currentTopics = computed(() => {
  return theoryStore.getTopicsByCategory(selectedCategory.value)
})

const handleCategorySelect = (category: string) => {
  selectedCategory.value = category
  selectedTopic.value = null
}

const handleTopicSelect = (topicId: string | null) => {
  selectedTopic.value = topicId
}</script>