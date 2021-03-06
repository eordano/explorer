import { Address, isAddress } from './Address'
import { CHAINED_ADDRESS } from './constants'
import { CryptographicIdentity, PublicCryptographicIdentity } from './CryptographicIdentity'
import { createSignedMessage, isValidMessage, SignedMessage } from './SignedMessage'
import { jsonStringify } from 'dcl/jslibs/stableStringify'

/**
 * We introduce the concept of a chained signature with an "chained key".
 * This is similar to what the X.509 standard does for a certification path (RFC 5280).
 */
export type ChainedCertificatedMessage = SignedMessage[]

/**
 * Create a normal signature link between two identities
 * @param rootIdentity The current authority signing certificates (must have a private key)
 * @param childIdentity The child identity (can have their private key missing)
 */
export function createAddressCertificateLink(
  rootIdentity: CryptographicIdentity,
  childIdentity: PublicCryptographicIdentity
) {
  return createSignedMessage(
    rootIdentity,
    jsonStringify({
      type: CHAINED_ADDRESS,
      childAddress: childIdentity.address,
    })
  )
}
export function validateChainedCertificate(sender: Address, messages: ChainedCertificatedMessage): boolean {
  return chainSignatureError(sender, messages) === undefined
}

/**
 * This method verifies the provided signature and returns a human-readable message, with populated information about
 * the errors found, for which the given ChainedCertificatedMessage fails. It returns undefined in case the signature
 * is invalid.
 */
export function chainSignatureError(sender: Address, messages: ChainedCertificatedMessage): string | undefined {
  const message = messages[0]
  if (!isValidMessage(message)) {
    return `Invalid signature for message: ${JSON.stringify(message)}`
  }
  // If the message was not signed by the current trusted sender, reject the chain
  if (sender !== message.signingAddress) {
    return `Signing address mismatch: Expected signature from ${sender}, found ${message.signingAddress}`
  }
  // If this is the last message, then the chain was successfully validated
  if (messages.length === 1) {
    return undefined
  }
  // Otherwise, we need to check that the current message is a valid link to another Chained Key
  try {
    const chained = JSON.parse(message.payload)
    if (typeof chained !== 'object') {
      return `Parsed message ${message.payload} is not an object`
    }
    switch (chained.type) {
      case CHAINED_ADDRESS:
        if (!isAddress(chained.childAddress)) {
          return `Invalid chained address: ${chained.childAddress}`
        }
        return chainSignatureError(chained.childAddress, messages.slice(1))
      default:
        return `Type of certificate link ${chained.type} is not recognized (expected CHAINED_ADDRESS=${CHAINED_ADDRESS})`
    }
  } catch (e) {
    return `Could not parse JSON from ${message.payload}`
  }
}
