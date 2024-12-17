export interface Topic {
  id: string
  title: string
  content: string
  category: 'network' | 'security' | 'protocols'
  sections: TopicSection[]
}

export interface TopicSection {
  title: string
  content: string
  subsections?: TopicSection[]
}

export interface PreviewTopic {
  id: string
  title: string
  description: string
  items: string[]
}

export interface SimulationType {
  id: VisualizationType
  title: string
  description: string
  category: 'network' | 'security' | 'protocols'
}