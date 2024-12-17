<template>
  <article v-if="topic" class="prose max-w-none">
    <h2>{{ topic.title }}</h2>
    <p>{{ topic.content }}</p>

    <div v-for="section in topic.sections" :key="section.title" class="mt-8">
      <h3>{{ section.title }}</h3>
      <p>{{ section.content }}</p>

      <div v-if="section.subsections" class="ml-6">
        <div v-for="subsection in section.subsections" :key="subsection.title" class="mt-4">
          <h4>{{ subsection.title }}</h4>
          <p>{{ subsection.content }}</p>
        </div>
      </div>
    </div>
  </article>
</template>

<script setup lang="ts">
import { Topic } from '../../types'

defineProps<{
  topic: Topic
}>()</script>