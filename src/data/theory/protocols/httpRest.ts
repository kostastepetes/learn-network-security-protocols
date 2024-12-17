import { Topic } from '../../../types'

export const httpRestTopic: Topic = {
  id: 'http-rest',
  title: 'HTTP/HTTPS & REST',
  category: 'protocols',
  content: 'Understanding web protocols and RESTful architecture.',
  sections: [
    {
      title: 'HTTP Protocol',
      content: 'The foundation of data communication on the web.',
      subsections: [
        {
          title: 'Methods',
          content: 'GET, POST, PUT, DELETE, and other HTTP methods.'
        },
        {
          title: 'Status Codes',
          content: '2xx success, 4xx client errors, 5xx server errors.'
        },
        {
          title: 'Headers',
          content: 'Request and response headers for metadata.'
        }
      ]
    },
    {
      title: 'HTTPS',
      content: 'Secure HTTP using TLS/SSL.',
      subsections: [
        {
          title: 'TLS Handshake',
          content: 'Establishing secure connections.'
        },
        {
          title: 'Certificates',
          content: 'Digital certificates and certificate authorities.'
        }
      ]
    },
    {
      title: 'REST Architecture',
      content: 'Representational State Transfer principles.',
      subsections: [
        {
          title: 'Resources',
          content: 'Identifying and manipulating resources.'
        },
        {
          title: 'Statelessness',
          content: 'Each request contains all necessary information.'
        },
        {
          title: 'HATEOAS',
          content: 'Hypermedia as the Engine of Application State.'
        }
      ]
    }
  ]
}