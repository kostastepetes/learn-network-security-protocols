import { osiModelTopic } from './networking/osiModel'
import { routingSwitchingTopic } from './networking/routingSwitching'
import { ipAddressingTopic } from './networking/ipAddressing'
import { encryptionTopic } from './security/encryption'
import { firewallsTopic } from './security/firewalls'
import { attackVectorsTopic } from './security/attackVectors'
import { httpRestTopic } from './protocols/httpRest'
import { emailProtocolsTopic } from './protocols/emailProtocols'
import { vpnIpsecTopic } from './protocols/vpnIpsec'

export const networkingTopics = [
  osiModelTopic,
  routingSwitchingTopic,
  ipAddressingTopic
]

export const securityTopics = [
  encryptionTopic,
  firewallsTopic,
  attackVectorsTopic
]

export const protocolTopics = [
  httpRestTopic,
  emailProtocolsTopic,
  vpnIpsecTopic
]

export const allTopics = [
  ...networkingTopics,
  ...securityTopics,
  ...protocolTopics
]