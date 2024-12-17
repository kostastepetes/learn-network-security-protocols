<template>
  <div>
    <!-- Topic List -->
    <div v-if="!selectedTopic" class="grid gap-6 grid-cols-1 sm:grid-cols-2">
      <TheoryTopicCard
        v-for="topic in topics"
        :key="topic.id"
        :topic="topic"
        @click="$emit('select-topic', topic.id)"
      />
    </div>

    <!-- Topic Detail -->
    <div v-else>
      <button 
        class="flex items-center text-sm text-indigo-600 hover:text-indigo-700 mb-4"
        @click="$emit('select-topic', null)"
      >
        <i class="pi pi-arrow-left mr-1"></i>
        Back to Topics
      </button>
      <TheoryTopicDetail 
        v-if="selectedTopicData"
        :topic="selectedTopicData"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { Topic } from '../../types'
import TheoryTopicCard from './TheoryTopicCard.vue'
import TheoryTopicDetail from './TheoryTopicDetail.vue'

const props = defineProps<{
  topics: Topic[]
  selectedTopic: string | null
}>()

const selectedTopicData = computed(() => {
  if (!props.selectedTopic) return null
  return props.topics.find(t => t.id === props.selectedTopic)
})

defineEmits<{
  (e: 'select-topic', topicId: string | null): void
}>()</script>