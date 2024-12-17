import { PreviewTopic } from '../types'

export const previewTopics: PreviewTopic[] = [
  {
    id: 'networking',
    title: 'Network Fundamentals',
    description: 'Master the core concepts of computer networking',
    items: [
      'OSI Model & TCP/IP Stack',
      'Routing & Switching',
      'Network Protocols',
      'IP Addressing & Subnetting'
    ]
  },
  {
    id: 'security',
    title: 'Security Essentials',
    description: 'Learn critical network security concepts',
    items: [
      'Encryption & Authentication',
      'Firewalls & Access Control',
      'Common Attack Vectors',
      'Security Best Practices'
    ]
  },
  {
    id: 'protocols',
    title: 'Protocol Deep Dives',
    description: 'Understand key networking protocols',
    items: [
      'HTTP/HTTPS & REST',
      'DNS & DHCP',
      'Email Protocols',
      'VPN & IPSec'
    ]
  }
]