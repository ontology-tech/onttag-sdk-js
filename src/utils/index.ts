import CryptoJS from 'crypto-js'
import { decode } from 'base64-url'
import moment from 'moment';
import { credentialType, headerType, bodyType } from '../type'

export const HmacSHA256 = (message: string, key: string) => {
  return CryptoJS.HmacSHA256(message, key).toString()
}

export const SHA256 = (message: string) => {
  return CryptoJS.SHA256(message).toString()
}

/**
 *
 * @param obj input params type of object
 * @returns Objects sorted by key
 */
export const SortParams = (obj: object) => {
  const customParams = {}
  Object.keys(obj)
    .sort()
    .forEach(function (key) {
      // @ts-ignore
      customParams[key] = obj[key]
    })
  return customParams
}

/**
 *
 * @param obj input params
 * @returns String concatenated by &
 */
export const ConnectStr = (obj: object): string => {
  let strArr: string[] = []
  Object.keys(obj).forEach(function (key) {
    // @ts-ignore
    strArr.push(key + '=' + obj[key])
  })
  return strArr.join('&')
}

/**
 *
 * @param obj input params
 * @returns output params
 */
export const serializeParameter = (obj: object): object => {
  return obj;
}

/**
 *
 * @param account eth account address
 * @returns id string
 */
export const generateId = (account: string): string => {
  if (!account) {
    throw new Error('No account')
  }
  if (account.indexOf('0x') <= -1) {
    throw new Error('Incorrect account format')
  }
  return 'did:ont:' + account.substring(2, account.length);
}


export const Base64Decode = (str: string) => {
  return decode(str);
}

/**
 *
 * @param JWTStr jwt string
 * @returns credentialType object
 */
export const deserialize = (JWTStr: string): credentialType => {
  let arr = JWTStr.split('.');
  console.log('arr', arr);
  let header: headerType = JSON.parse(Base64Decode(arr[0]));
  let bodyData: bodyType = JSON.parse(Base64Decode(arr[1]))
  let result: credentialType = {
    "@context": bodyData.vc["@context"],
    id: bodyData.jti,
    type: bodyData.vc.type,
    issuer: bodyData.iss,
    issuanceDate: moment(bodyData.iat * 1000).utc().toISOString(),
    expirationDate: moment(bodyData.exp * 1000).utc().toISOString(),
    credentialStatus: bodyData.vc.credentialStatus,
    credentialSubject: bodyData.vc.credentialSubject,
    proof: {
      type: header.typ,
      verificationMethod: header.kid,
      ...bodyData.vc.proof,
      jws: arr[2]
    }
  }
  return result;
}