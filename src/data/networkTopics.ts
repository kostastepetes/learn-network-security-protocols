import { Topic } from '../types'

export const networkTopics: Topic[] = [
  // ... existing topics ...
  {
    id: 'network-protocols',
    title: 'Network Protocols Overview',
    category: 'network',
    content: 'Network protocols are standardized rules for formatting and processing data.',
    sections: [
      {
        title: 'Application Layer Protocols',
        content: 'Protocols that work at the application layer of the OSI model.',
        subsections: [
          {
            title: 'HTTP/HTTPS',
            content: 'Web protocols for transferring hypertext and secure communication'
          },
          {
            title: 'FTP/SFTP',
            content: 'File transfer protocols for uploading and downloading files'
          },
          {
            title: 'SMTP/POP3/IMAP',
            content: 'Email protocols for sending and receiving messages'
          }
        ]
      },
      {
        title: 'Transport Layer Protocols',
        content: 'Protocols responsible for end-to-end communication.',
        subsections: [
          {
            title: 'TCP',
            content: 'Connection-oriented protocol with guaranteed delivery'
          },
          {
            title: 'UDP',
            content: 'Connectionless protocol for fast, unreliable delivery'
          },
          {
            title: 'SCTP',
            content: 'Stream Control Transmission Protocol for message-oriented applications'
          }
        ]
      }
    ]
  },
  {
    id: 'network-services',
    title: 'Network Services',
    category: 'network',
    content: 'Essential services that enable network functionality.',
    sections: [
      {
        title: 'DHCP',
        content: 'Dynamic Host Configuration Protocol for IP address assignment.',
        subsections: [
          {
            title: 'Address Pool',
            content: 'Range of IP addresses available for assignment'
          },
          {
            title: 'Lease Time',
            content: 'Duration for which an IP address is assigned'
          }
        ]
      },
      {
        title: 'DNS',
        content: 'Domain Name System for resolving domain names to IP addresses.',
        subsections: [
          {
            title: 'Record Types',
            content: 'Different types of DNS records (A, AAAA, MX, CNAME, etc.)'
          },
          {
            title: 'Hierarchy',
            content: 'Root, TLD, and authoritative name servers'
          }
        ]
      }
    ]
  }
]