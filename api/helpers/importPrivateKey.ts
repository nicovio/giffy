import { base64 } from '../deps.ts'

const PEM_HEADER = '-----BEGIN PRIVATE KEY-----'
const PEM_FOOTER = '-----END PRIVATE KEY-----'
const KEY_OPTIONS: [HmacKeyGenParams, boolean, KeyUsage[]] = [
  {
    name: 'HMAC',
    hash: 'SHA-512',
  },
  true,
  ['sign', 'verify'],
]

export function importPrivateKey(pem: string) {
  const pemContents = pem.substring(PEM_HEADER.length, pem.length - PEM_FOOTER.length)
  const keyData = base64.decode(pemContents).buffer
  return window.crypto.subtle.importKey('raw', keyData, ...KEY_OPTIONS)
}
