import { Topic } from '../../../types'

export const attackVectorsTopic: Topic = {
  id: 'attack-vectors',
  title: 'Common Attack Vectors',
  category: 'security',
  content: 'Understanding common network and security vulnerabilities.',
  sections: [
    {
      title: 'Network Attacks',
      content: 'Attacks targeting network infrastructure.',
      subsections: [
        {
          title: 'DDoS',
          content: 'Distributed Denial of Service attacks and mitigation.'
        },
        {
          title: 'Man-in-the-Middle',
          content: 'Intercepting and potentially altering communications.'
        },
        {
          title: 'Port Scanning',
          content: 'Discovering open ports and services.'
        }
      ]
    },
    {
      title: 'Application Attacks',
      content: 'Attacks targeting application vulnerabilities.',
      subsections: [
        {
          title: 'SQL Injection',
          content: 'Exploiting database queries through user input.'
        },
        {
          title: 'XSS',
          content: 'Cross-site scripting attacks in web applications.'
        },
        {
          title: 'CSRF',
          content: 'Cross-site request forgery attacks.'
        }
      ]
    }
  ]
}