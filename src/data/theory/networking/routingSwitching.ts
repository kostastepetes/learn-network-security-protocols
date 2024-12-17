import { Topic } from '../../../types'

export const routingSwitchingTopic: Topic = {
  id: 'routing-switching',
  title: 'Routing & Switching',
  category: 'network',
  content: 'Understanding how data is directed through networks using routing and switching technologies.',
  sections: [
    {
      title: 'Switching',
      content: 'Network switching connects devices within the same network.',
      subsections: [
        {
          title: 'Layer 2 Switching',
          content: 'Uses MAC addresses to forward frames within a local network.'
        },
        {
          title: 'VLANs',
          content: 'Virtual LANs segment networks logically for better management and security.'
        },
        {
          title: 'Spanning Tree Protocol',
          content: 'Prevents loops in switched networks while maintaining redundancy.'
        }
      ]
    },
    {
      title: 'Routing',
      content: 'Routing determines the best path for data between different networks.',
      subsections: [
        {
          title: 'Static Routing',
          content: 'Manually configured routes for predictable network paths.'
        },
        {
          title: 'Dynamic Routing',
          content: 'Automatic route discovery and updates using protocols like OSPF and BGP.'
        },
        {
          title: 'Route Selection',
          content: 'Process of choosing the best path based on metrics like hop count and bandwidth.'
        }
      ]
    }
  ]
}