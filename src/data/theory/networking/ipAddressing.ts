import { Topic } from '../../../types'

export const ipAddressingTopic: Topic = {
  id: 'ip-addressing',
  title: 'IP Addressing & Subnetting',
  category: 'network',
  content: 'Understanding IP addressing schemes and subnet calculations.',
  sections: [
    {
      title: 'IPv4 Addressing',
      content: 'The fourth version of the Internet Protocol address system.',
      subsections: [
        {
          title: 'Address Classes',
          content: 'Traditional A, B, C, D, and E classes and their ranges.'
        },
        {
          title: 'Private vs Public',
          content: 'Understanding private (RFC 1918) and public IP address spaces.'
        },
        {
          title: 'Special Addresses',
          content: 'Localhost, broadcast, and network addresses.'
        }
      ]
    },
    {
      title: 'Subnetting',
      content: 'Dividing networks into smaller, manageable segments.',
      subsections: [
        {
          title: 'Subnet Masks',
          content: 'Using subnet masks to define network and host portions.'
        },
        {
          title: 'CIDR Notation',
          content: 'Classless Inter-Domain Routing notation for network prefixes.'
        },
        {
          title: 'Subnet Calculations',
          content: 'Calculating network addresses, broadcast addresses, and host ranges.'
        }
      ]
    },
    {
      title: 'IPv6',
      content: 'The next generation of IP addressing.',
      subsections: [
        {
          title: 'Address Format',
          content: '128-bit addresses written in hexadecimal notation.'
        },
        {
          title: 'Address Types',
          content: 'Unicast, multicast, and anycast addresses.'
        },
        {
          title: 'Transition Mechanisms',
          content: 'Dual-stack, tunneling, and translation technologies.'
        }
      ]
    }
  ]
}