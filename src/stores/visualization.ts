import { defineStore } from 'pinia'
import { VisualizationType } from '../types/visualization'
import { visualizationConfigs } from '../config/visualizations'
import { createTCPVisualization } from '../components/playground/visualizations/TCPVisualization'
import { createEncryptionVisualization } from '../components/playground/visualizations/EncryptionVisualization'
import { createRoutingVisualization } from '../components/playground/visualizations/RoutingVisualization'
import { createDHCPVisualization } from '../components/playground/visualizations/DHCPVisualization'
import { createFirewallVisualization } from '../components/playground/visualizations/FirewallVisualization'
import { createLoadBalancingVisualization } from '../components/playground/visualizations/LoadBalancingVisualization'
import { createOsiModelVisualization } from '../components/playground/visualizations/OsiModelVisualization'
import { createSubnettingVisualization } from '../components/playground/visualizations/SubnettingVisualization'
import { createHttpRestVisualization } from '../components/playground/visualizations/HttpRestVisualization'

export const useVisualizationStore = defineStore('visualization', {
  state: () => ({
    activeAnimations: new Map<VisualizationType, number>()
  }),

  getters: {
    getTitle: () => (type: VisualizationType) => visualizationConfigs[type]?.title || 'Network Visualization',
    getDescription: () => (type: VisualizationType) => visualizationConfigs[type]?.description || ''
  },

  actions: {
    createVisualization(type: VisualizationType, container: HTMLElement) {
      const visualizations = {
        tcp: createTCPVisualization,
        encryption: createEncryptionVisualization,
        routing: createRoutingVisualization,
        dhcp: createDHCPVisualization,
        firewall: createFirewallVisualization,
        'load-balancing': createLoadBalancingVisualization,
        'osi-model': createOsiModelVisualization,
        subnetting: createSubnettingVisualization,
        'http-rest': createHttpRestVisualization
      }

      if (visualizations[type]) {
        visualizations[type](container)
      }
    },

    startAnimation(type: VisualizationType, container: HTMLElement | null) {
      if (!container) return
      this.stopAnimation(type)
      // Implementation depends on visualization type
    },

    pauseAnimation(type: VisualizationType) {
      const animationId = this.activeAnimations.get(type)
      if (animationId) {
        cancelAnimationFrame(animationId)
        this.activeAnimations.delete(type)
      }
    },

    stopAnimation(type: VisualizationType) {
      this.pauseAnimation(type)
    }
  }
})