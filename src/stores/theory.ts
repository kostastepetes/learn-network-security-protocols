import { defineStore } from 'pinia'
import { allTopics } from '../data/theory'
import type { Topic } from '../types'

export const useTheoryStore = defineStore('theory', {
  state: () => ({
    topics: allTopics as Topic[]
  }),

  getters: {
    getTopicsByCategory: (state) => {
      return (category: string) => state.topics.filter(topic => topic.category === category)
    },

    getTotalTopicsCount: (state) => state.topics.length,

    getTopicById: (state) => {
      return (id: string) => state.topics.find(topic => topic.id === id)
    }
  }
})