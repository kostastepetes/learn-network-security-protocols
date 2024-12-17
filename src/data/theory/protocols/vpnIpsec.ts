import { Topic } from '../../../types'

export const vpnIpsecTopic: Topic = {
  id: 'vpn-ipsec',
  title: 'VPN & IPSec',
  category: 'protocols',
  content: 'Virtual Private Networks and Internet Protocol Security.',
  sections: [
    {
      title: 'VPN Types',
      content: 'Different types of Virtual Private Networks.',
      subsections: [
        {
          title: 'Site-to-Site',
          content: 'Connecting entire networks together.'
        },
        {
          title: 'Remote Access',
          content: 'Individual clients connecting to networks.'
        },
        {
          title: 'SSL VPN',
          content: 'Browser-based VPN access.'
        }
      ]
    },
    {
      title: 'IPSec',
      content: 'Security protocol suite for IP communications.',
      subsections: [
        {
          title: 'AH Protocol',
          content: 'Authentication Header for integrity.'
        },
        {
          title: 'ESP Protocol',
          content: 'Encapsulating Security Payload for encryption.'
        },
        {
          title: 'IKE',
          content: 'Internet Key Exchange for key management.'
        }
      ]
    }
  ]
}