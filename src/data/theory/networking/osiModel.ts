import { Topic } from '../../../types'

export const osiModelTopic: Topic = {
  id: 'osi-model',
  title: 'OSI Model & TCP/IP Stack',
  category: 'network',
  content: 'The OSI Model and TCP/IP Stack are fundamental frameworks for understanding network communications.',
  sections: [
    {
      title: 'OSI Model Layers',
      content: 'The OSI Model consists of seven layers that define network communication.',
      subsections: [
        {
          title: 'Physical Layer (Layer 1)',
          content: 'Handles the physical transmission of data through hardware like cables and network cards.'
        },
        {
          title: 'Data Link Layer (Layer 2)',
          content: 'Manages direct node-to-node communication and handles error detection.'
        },
        {
          title: 'Network Layer (Layer 3)',
          content: 'Handles routing and forwarding of data packets between different networks.'
        },
        {
          title: 'Transport Layer (Layer 4)',
          content: 'Ensures reliable end-to-end communication and data flow control.'
        },
        {
          title: 'Session Layer (Layer 5)',
          content: 'Manages sessions between applications, including establishment and termination.'
        },
        {
          title: 'Presentation Layer (Layer 6)',
          content: 'Handles data format translation, encryption, and compression.'
        },
        {
          title: 'Application Layer (Layer 7)',
          content: 'Provides network services directly to end-user applications.'
        }
      ]
    },
    {
      title: 'TCP/IP Stack',
      content: 'The TCP/IP protocol suite is the foundation of the Internet.',
      subsections: [
        {
          title: 'Network Access Layer',
          content: 'Corresponds to OSI layers 1 and 2, handling physical and data link communication.'
        },
        {
          title: 'Internet Layer',
          content: 'Similar to OSI layer 3, manages IP addressing and routing.'
        },
        {
          title: 'Transport Layer',
          content: 'Equivalent to OSI layer 4, implements TCP and UDP protocols.'
        },
        {
          title: 'Application Layer',
          content: 'Combines OSI layers 5-7, includes protocols like HTTP, FTP, and SMTP.'
        }
      ]
    }
  ]
}