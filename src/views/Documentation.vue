<template>
  <div class="min-h-screen bg-gray-50">
    <div class="max-w-7xl mx-auto py-6 px-4">
      <h1 class="text-3xl font-bold text-gray-900 mb-8">Documentation</h1>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <TopicList
          title="Networking"
          :topics="networkTopics"
          @select="selectedTopic = $event"
        />
        <TopicList
          title="Protocols"
          :topics="protocolTopics"
          @select="selectedTopic = $event"
        />
        <TopicList
          title="Security"
          :topics="securityTopics"
          @select="selectedTopic = $event"
        />
      </div>

      <div v-if="selectedTopic" class="mt-8 bg-white p-6 rounded-lg shadow">
        <TopicContent :topic="selectedTopic" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Topic } from '../types'
import TopicList from '../components/documentation/TopicList.vue'
import TopicContent from '../components/documentation/TopicContent.vue'
import { networkTopics } from '../data/networkTopics'
import { protocolTopics } from '../data/protocolTopics'
import { securityTopics } from '../data/securityTopics'

const selectedTopic = ref<Topic | null>(null)</script>