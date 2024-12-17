import { Topic } from '../../../types'

export const emailProtocolsTopic: Topic = {
  id: 'email-protocols',
  title: 'Email Protocols',
  category: 'protocols',
  content: 'Understanding protocols used for email communication.',
  sections: [
    {
      title: 'SMTP',
      content: 'Simple Mail Transfer Protocol for sending email.',
      subsections: [
        {
          title: 'Mail Submission',
          content: 'How emails are submitted to mail servers.'
        },
        {
          title: 'Mail Relay',
          content: 'How emails are relayed between servers.'
        },
        {
          title: 'Security',
          content: 'SMTP authentication and encryption.'
        }
      ]
    },
    {
      title: 'IMAP',
      content: 'Internet Message Access Protocol for retrieving email.',
      subsections: [
        {
          title: 'Folder Management',
          content: 'Managing email folders and messages.'
        },
        {
          title: 'Message Flags',
          content: 'Marking messages as read, flagged, etc.'
        }
      ]
    },
    {
      title: 'POP3',
      content: 'Post Office Protocol version 3.',
      subsections: [
        {
          title: 'Basic Operations',
          content: 'Downloading and deleting messages.'
        },
        {
          title: 'Limitations',
          content: 'Comparison with IMAP capabilities.'
        }
      ]
    }
  ]
}