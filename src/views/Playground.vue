<template>
  <div class="min-h-screen bg-gray-50">
    <div class="max-w-7xl mx-auto py-6 px-4">
      <h1 class="text-3xl font-bold text-gray-900 mb-8">Interactive Playground</h1>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <!-- Simulation Controls -->
        <div class="bg-white p-6 rounded-lg shadow">
          <h2 class="text-xl font-semibold mb-4">Simulation Controls</h2>
          <div class="space-y-4">
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-2">
                Simulation Type
              </label>
              <select 
                v-model="selectedSimulation"
                class="w-full px-3 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
              >
                <option value="tcp">TCP/IP Communication</option>
                <option value="encryption">Encryption Process</option>
                <option value="routing">Network Routing</option>
                <option value="dhcp">DHCP Protocol</option>
                <option value="firewall">Firewall Rules</option>
                <option value="load-balancing">Load Balancing</option>
              </select>
            </div>

            <button 
              @click="startSimulation"
              class="w-full bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition-colors duration-200"
            >
              Start Simulation
            </button>
          </div>
        </div>

        <NetworkVisualization 
          class="md:col-span-2"
          :type="selectedSimulation"
          :key="visualizationKey"
        />
      </div>

    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { VisualizationType } from '../types/visualization'
import NetworkVisualization from '../components/playground/NetworkVisualization.vue'

const selectedSimulation = ref<VisualizationType>('tcp')
const visualizationKey = ref(0)

const explanations = {
  tcp: 'TCP/IP communication involves a three-way handshake to establish a connection. The client initiates with SYN, server responds with SYN-ACK, and client confirms with ACK.',
  encryption: 'Data encryption transforms plaintext into ciphertext using cryptographic algorithms. This visualization shows both symmetric and asymmetric encryption processes.',
  routing: 'Network routing determines the path data packets take through interconnected networks. Routers use various protocols to find the most efficient path.',
  dhcp: 'DHCP (Dynamic Host Configuration Protocol) automatically assigns IP addresses to devices on a network. The process involves Discover, Offer, Request, and Acknowledge messages.',
  firewall: 'Firewalls control network traffic based on predetermined security rules. They can allow or block traffic based on protocols, ports, and other criteria.',
  'load-balancing': 'Load balancers distribute incoming network traffic across multiple servers to ensure no single server bears too much load.',
  'dns-resolution': 'DNS resolution converts domain names into IP addresses through a hierarchical query process.',
  vpn: 'VPN (Virtual Private Network) creates a secure, encrypted tunnel between two points across a public network.'
} as const

const currentExplanation = ref(explanations[selectedSimulation.value])

function startSimulation() {
  visualizationKey.value++
  currentExplanation.value = explanations[selectedSimulation.value]
}</script>