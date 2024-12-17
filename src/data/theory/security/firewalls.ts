import { Topic } from '../../../types'

export const firewallsTopic: Topic = {
  id: 'firewalls',
  title: 'Firewalls & Access Control',
  category: 'security',
  content: 'Controlling network access and protecting against unauthorized access.',
  sections: [
    {
      title: 'Firewall Types',
      content: 'Different types of firewalls and their capabilities.',
      subsections: [
        {
          title: 'Packet Filtering',
          content: 'Basic filtering based on IP addresses and ports.'
        },
        {
          title: 'Stateful Inspection',
          content: 'Tracking connection states for better security.'
        },
        {
          title: 'Application Layer',
          content: 'Deep packet inspection and application-aware filtering.'
        }
      ]
    },
    {
      title: 'Access Control',
      content: 'Managing who can access what resources.',
      subsections: [
        {
          title: 'ACLs',
          content: 'Access Control Lists for resource permission management.'
        },
        {
          title: 'Role-based Access',
          content: 'Assigning permissions based on user roles.'
        },
        {
          title: 'Zero Trust',
          content: 'Modern approach to security assuming no implicit trust.'
        }
      ]
    }
  ]
}