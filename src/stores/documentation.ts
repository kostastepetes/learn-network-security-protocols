import { defineStore } from 'pinia'

interface Topic {
  id: string
  title: string
  content: string
  category: 'network' | 'security' | 'protocols'
}

export const useDocumentationStore = defineStore('documentation', {
  state: () => ({
    topics: [
      {
        id: 'osi-model',
        title: 'OSI Model',
        content: 'The OSI (Open Systems Interconnection) model is a conceptual framework used to describe the functions of a networking system...',
        category: 'network'
      },
      {
        id: 'tcp-ip',
        title: 'TCP/IP Protocol',
        content: 'TCP/IP (Transmission Control Protocol/Internet Protocol) is the basic communication protocol of the internet...',
        category: 'protocols'
      },
      {
        id: 'encryption',
        title: 'Encryption Basics',
        content: 'Encryption is the process of encoding information so that only authorized parties can access it...',
        category: 'security'
      }
    ] as Topic[]
  }),
  getters: {
    getTopicsByCategory: (state) => {
      return (category: Topic['category']) => state.topics.filter(topic => topic.category === category)
    }
  }
})