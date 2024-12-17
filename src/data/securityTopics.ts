import { Topic } from '../types'

export const securityTopics: Topic[] = [
  // ... existing topics ...
  {
    id: 'network-attacks',
    title: 'Common Network Attacks',
    category: 'security',
    content: 'Understanding common network security threats and attack vectors.',
    sections: [
      {
        title: 'DDoS Attacks',
        content: 'Distributed Denial of Service attacks that overwhelm network resources.',
        subsections: [
          {
            title: 'Volume-based Attacks',
            content: 'Flooding network with traffic to exhaust bandwidth'
          },
          {
            title: 'Protocol Attacks',
            content: 'Exploiting weaknesses in network protocols'
          }
        ]
      },
      {
        title: 'Man-in-the-Middle',
        content: 'Intercepting communications between two parties.',
        subsections: [
          {
            title: 'ARP Poisoning',
            content: 'Manipulating Address Resolution Protocol tables'
          },
          {
            title: 'SSL Stripping',
            content: 'Downgrading HTTPS connections to HTTP'
          }
        ]
      }
    ]
  },
  {
    id: 'security-protocols',
    title: 'Security Protocols',
    category: 'security',
    content: 'Protocols designed to secure network communications.',
    sections: [
      {
        title: 'TLS/SSL',
        content: 'Transport Layer Security and its predecessor, Secure Sockets Layer.',
        subsections: [
          {
            title: 'Handshake Protocol',
            content: 'Process of establishing a secure connection'
          },
          {
            title: 'Certificate Validation',
            content: 'Verifying the authenticity of digital certificates'
          }
        ]
      },
      {
        title: 'IPSec',
        content: 'Internet Protocol Security for securing IP communications.',
        subsections: [
          {
            title: 'Authentication Header',
            content: 'Provides integrity and authentication'
          },
          {
            title: 'ESP',
            content: 'Encapsulating Security Payload for encryption'
          }
        ]
      }
    ]
  }
]