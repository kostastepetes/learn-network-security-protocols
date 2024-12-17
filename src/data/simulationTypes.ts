import { SimulationType } from '../types'

export const simulationTypes: SimulationType[] = [
  {
    id: 'tcp',
    title: 'TCP/IP Communication',
    description: 'Visualize the TCP three-way handshake and data transfer',
    category: 'protocols'
  },
  {
    id: 'encryption',
    title: 'Data Encryption',
    description: 'See how data is encrypted and decrypted',
    category: 'security'
  },
  {
    id: 'routing',
    title: 'Network Routing',
    description: 'Understand how data packets are routed through networks',
    category: 'network'
  },
  {
    id: 'dhcp',
    title: 'DHCP Protocol',
    description: 'Learn how devices obtain IP addresses automatically',
    category: 'protocols'
  },
  {
    id: 'firewall',
    title: 'Firewall Rules',
    description: 'See how firewalls filter network traffic',
    category: 'security'
  },
  {
    id: 'load-balancing',
    title: 'Load Balancing',
    description: 'Visualize traffic distribution across servers',
    category: 'network'
  },
  {
    id: 'dns-resolution',
    title: 'DNS Resolution',
    description: 'Follow the DNS query resolution process',
    category: 'protocols'
  },
  {
    id: 'vpn',
    title: 'VPN Tunneling',
    description: 'See how VPNs create secure connections',
    category: 'security'
  }
]