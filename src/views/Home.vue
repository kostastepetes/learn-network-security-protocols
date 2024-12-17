<template>
  <div class="min-h-screen bg-gradient-to-br from-indigo-900 via-indigo-800 to-purple-900">
    <!-- Hero Section -->
    <header class="relative overflow-hidden">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div class="text-center">
          <h1 class="text-5xl md:text-7xl font-extrabold text-white mb-6 tracking-tight">
            Learn the Basics of Network & Security Protocols
          </h1>
          <p class="text-xl md:text-2xl text-indigo-200 mb-12 max-w-3xl mx-auto">
            An interactive learning platform for understanding network protocols, security, and communication standards
          </p>
          <div class="flex justify-center gap-6">
            <router-link 
              to="/theory" 
              class="px-8 py-4 bg-white text-indigo-900 rounded-lg font-semibold hover:bg-indigo-100 transition-colors"
            >
              Start Learning
            </router-link>
            <router-link 
              to="/playground" 
              class="px-8 py-4 bg-transparent border-2 border-white text-white rounded-lg font-semibold hover:bg-white/10 transition-colors"
            >
              Try Playground
            </router-link>
          </div>
        </div>
      </div>

      <!-- Animated Network Background -->
      <div class="absolute inset-0 -z-10">
        <NetworkAnimation />
      </div>
    </header>

    <!-- Features Section -->
    <section class="py-24 bg-white/5 backdrop-blur-lg">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 class="text-3xl font-bold text-white text-center mb-16">Platform Features</h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <FeatureCard 
            title="Interactive Theory"
            description="Comprehensive learning materials covering networking fundamentals to advanced security protocols"
            icon="book"
          />
          <FeatureCard 
            title="Visual Playground"
            description="Interactive visualizations to understand complex network concepts and security mechanisms"
            icon="play"
          />
          <FeatureCard 
            title="Real-world Examples"
            description="Practice with simulations based on real-world networking and security scenarios"
            icon="globe"
          />
        </div>
      </div>
    </section>

    <!-- Topics Preview -->
    <section class="py-24">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 class="text-3xl font-bold text-white text-center mb-16">What You'll Learn</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <TopicPreviewCard 
            v-for="topic in previewTopics" 
            :key="topic.id"
            :topic="topic"
          />
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import NetworkAnimation from '../components/home/NetworkAnimation.vue'
import FeatureCard from '../components/home/FeatureCard.vue'
import TopicPreviewCard from '../components/home/TopicPreviewCard.vue'
import { previewTopics } from '../data/previewTopics'
</script>