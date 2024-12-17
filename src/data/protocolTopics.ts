import { Topic } from '../types'

export const protocolTopics: Topic[] = [
  {
    id: 'tcp-ip',
    title: 'TCP/IP Protocol Suite',
    category: 'protocols',
    content: 'The TCP/IP protocol suite is the foundation of the internet and modern computer networks.',
    sections: [
      {
        title: 'TCP (Transmission Control Protocol)',
        content: 'Connection-oriented protocol that ensures reliable, ordered, and error-checked delivery of data.',
        subsections: [
          {
            title: 'Three-Way Handshake',
            content: '1. SYN: Client initiates connection\n2. SYN-ACK: Server acknowledges\n3. ACK: Client confirms'
          },
          {
            title: 'Flow Control',
            content: 'Uses sliding window protocol to prevent overwhelming receivers'
          }
        ]
      },
      {
        title: 'UDP (User Datagram Protocol)',
        content: 'Connectionless protocol for fast, unreliable data transmission.',
        subsections: [
          {
            title: 'Characteristics',
            content: 'No connection establishment, no guaranteed delivery, no flow control'
          },
          {
            title: 'Use Cases',
            content: 'Streaming media, online gaming, DNS queries'
          }
        ]
      }
    ]
  },
  {
    id: 'http',
    title: 'HTTP Protocol',
    category: 'protocols',
    content: 'HTTP (Hypertext Transfer Protocol) is the foundation of data communication on the World Wide Web.',
    sections: [
      {
        title: 'HTTP Methods',
        content: 'Different types of requests for interacting with resources.',
        subsections: [
          {
            title: 'GET',
            content: 'Retrieve data from the server'
          },
          {
            title: 'POST',
            content: 'Submit data to be processed to the server'
          },
          {
            title: 'PUT',
            content: 'Update existing resource on the server'
          },
          {
            title: 'DELETE',
            content: 'Remove specified resource from the server'
          }
        ]
      },
      {
        title: 'Status Codes',
        content: 'Indicate the result of the HTTP request.',
        subsections: [
          {
            title: '2xx Success',
            content: '200 OK, 201 Created, 204 No Content'
          },
          {
            title: '4xx Client Errors',
            content: '400 Bad Request, 401 Unauthorized, 404 Not Found'
          },
          {
            title: '5xx Server Errors',
            content: '500 Internal Server Error, 503 Service Unavailable'
          }
        ]
      }
    ]
  },
  {
    id: 'dns',
    title: 'DNS Protocol',
    category: 'protocols',
    content: 'DNS (Domain Name System) translates human-readable domain names into IP addresses.',
    sections: [
      {
        title: 'DNS Resolution Process',
        content: 'Steps involved in resolving a domain name to an IP address.',
        subsections: [
          {
            title: 'Recursive Query',
            content: 'Client asks resolver to find the answer'
          },
          {
            title: 'Iterative Query',
            content: 'Resolver asks each nameserver in hierarchy'
          }
        ]
      },
      {
        title: 'Record Types',
        content: 'Different types of DNS records store different types of data.',
        subsections: [
          {
            title: 'A Record',
            content: 'Maps hostname to IPv4 address'
          },
          {
            title: 'AAAA Record',
            content: 'Maps hostname to IPv6 address'
          },
          {
            title: 'MX Record',
            content: 'Specifies mail servers for the domain'
          },
          {
            title: 'CNAME Record',
            content: 'Creates an alias for another domain name'
          }
        ]
      }
    ]
  }
]