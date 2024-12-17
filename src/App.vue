<template>
  <div class="min-h-screen bg-gray-50">
    <nav class="bg-white shadow">
      <div class="max-w-7xl mx-auto px-4">
        <div class="flex justify-between h-16">
          <div class="flex">
            <router-link 
              to="/" 
              class="flex items-center px-4 text-gray-900 hover:text-indigo-600"
            >
              Home
            </router-link>
            <router-link 
              to="/theory" 
              class="flex items-center px-4 text-gray-900 hover:text-indigo-600"
            >
              Theory
            </router-link>
            <router-link 
              to="/playground" 
              class="flex items-center px-4 text-gray-900 hover:text-indigo-600"
            >
              Playground
            </router-link>
          </div>
        </div>
      </div>
    </nav>

    <router-view></router-view>
  </div>
</template>

<script setup lang="ts">
// App component logic here
</script>