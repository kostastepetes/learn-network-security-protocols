import { VisualizationType } from '../types/visualization'

type VisualizationConfig = {
  title: string
  description: string
}

export const visualizationConfigs: Record<VisualizationType, VisualizationConfig> = {
  tcp: {
    title: 'TCP/IP Communication',
    description: 'Visualizes the TCP three-way handshake and data transfer process.'
  },
  encryption: {
    title: 'Data Encryption Process',
    description: 'Shows how data is encrypted and decrypted using various algorithms.'
  },
  routing: {
    title: 'Network Routing',
    description: 'Demonstrates how packets are routed through a network.'
  },
  dhcp: {
    title: 'DHCP Protocol Flow',
    description: 'Illustrates the DHCP process of obtaining IP addresses.'
  },
  firewall: {
    title: 'Firewall Rules & Filtering',
    description: 'Shows how firewalls filter and control network traffic.'
  },
  'load-balancing': {
    title: 'Load Balancer Distribution',
    description: 'Demonstrates distribution of traffic across multiple servers.'
  },
  'osi-model': {
    title: 'OSI Model Layers',
    description: 'Interactive visualization of the OSI model layers.'
  },
  subnetting: {
    title: 'IP Subnetting',
    description: 'Visual representation of network subnetting.'
  },
  'http-rest': {
    title: 'HTTP/REST Methods',
    description: 'Demonstrates different HTTP methods and REST principles.'
  },
  'dns-resolution': {
    title: 'DNS Resolution Process',
    description: 'Shows how domain names are resolved to IP addresses.'
  },
  vpn: {
    title: 'VPN Tunneling',
    description: 'Illustrates secure VPN connections and tunneling.'
  },
  email: {
    title: 'Email Protocol Flow',
    description: 'Demonstrates SMTP, IMAP, and POP3 protocols.'
  },
  'attack-simulation': {
    title: 'Network Attack Simulation',
    description: 'Simulates common network attacks and defenses.'
  }
}