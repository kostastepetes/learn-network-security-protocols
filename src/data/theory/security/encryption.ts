import { Topic } from '../../../types'

export const encryptionTopic: Topic = {
  id: 'encryption',
  title: 'Encryption & Authentication',
  category: 'security',
  content: 'Protecting data through encryption and verifying identities through authentication.',
  sections: [
    {
      title: 'Symmetric Encryption',
      content: 'Using the same key for encryption and decryption.',
      subsections: [
        {
          title: 'Block Ciphers',
          content: 'AES, DES, and 3DES algorithms.'
        },
        {
          title: 'Stream Ciphers',
          content: 'RC4 and ChaCha20 algorithms.'
        },
        {
          title: 'Key Management',
          content: 'Secure key distribution and storage.'
        }
      ]
    },
    {
      title: 'Asymmetric Encryption',
      content: 'Using public and private key pairs.',
      subsections: [
        {
          title: 'RSA',
          content: 'Public key cryptography for secure communication.'
        },
        {
          title: 'Digital Signatures',
          content: 'Ensuring message authenticity and non-repudiation.'
        },
        {
          title: 'Key Exchange',
          content: 'Diffie-Hellman and other key exchange protocols.'
        }
      ]
    },
    {
      title: 'Authentication Methods',
      content: 'Verifying user identities.',
      subsections: [
        {
          title: 'Password-based',
          content: 'Secure password storage and validation.'
        },
        {
          title: 'Multi-factor',
          content: 'Combining multiple authentication factors.'
        },
        {
          title: 'Biometric',
          content: 'Using physical characteristics for authentication.'
        }
      ]
    }
  ]
}