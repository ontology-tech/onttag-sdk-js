import { CredentialContextType, SendUserInfo, } from '../type';
import { SortParams, SHA256, ConnectStr, HmacSHA256 } from "../utils";
import { AxiosResponse } from "axios";
import { ApiResponse, ApiAllVcResult } from '../type';
import request from "./request";

export const getVcList = async (accountId: string = '', authType: string): Promise<any> => {
  if (!accountId || !authType) {
    throw new Error('Params error');
  }
  let credentialContext = '';
  Object.getOwnPropertyNames(CredentialContextType).forEach(function (key) {
    if (key === authType) {
      // @ts-ignore
      credentialContext = CredentialContextType[key]
    }
  });
  console.log('accountId', accountId)
  console.log('credentialContext',credentialContext)
  const { data }: AxiosResponse<ApiResponse<object>> = await request({
    url: '/v1/credentials/' + accountId + '?credential_context=' + credentialContext,
    method: 'GET',
  })
  if (data.error !== 0) {
    throw new Error(data.desc)
  }
  return data.result
}

export const sendUserInfo = async (params: SendUserInfo, apiKey: string): Promise<boolean> => {
  let credentialContext = '';
  Object.getOwnPropertyNames(CredentialContextType).forEach(function (key) {
    if (key === params.authType) {
      // @ts-ignore
      credentialContext = CredentialContextType[key]
    }
  });
  const originParams = {
    ...params,
    credentialContext,
    encryptFlag: false,
    isLivingDetection: false,
  }
  const customParams = SortParams(originParams);
  let str = ConnectStr(customParams);
  let sign = HmacSHA256(str, apiKey);
  console.log('params', JSON.stringify({
    ...customParams,
    sign
  }))
  try {
    const { data }: AxiosResponse<ApiResponse<string>> = await request({
      url: '/v1/kyc-data',
      method: 'POST',
      data: {
        ...customParams,
        sign
      }
    })
    console.log('data', data);
    if (data.error !== 0) {
      throw new Error(data.desc)
    }
    return true;
  } catch (e) {
    console.log(JSON.stringify(e))
    throw new Error(e)
  }
}

export const getSocialAuthLink = (ownerDid: string = '', authType: string, apiKey: string, appId: string) => {
  if (!ownerDid || !authType) {
    throw new Error('Params error');
  }
  let credentialContext = '';
  Object.getOwnPropertyNames(CredentialContextType).forEach(function (key) {
    if (key === authType) {
      // @ts-ignore
      credentialContext = CredentialContextType[key]
    }
  });
  return `https://social.tag.ont.id?context=${credentialContext}&ontid=${ownerDid}&apiKey=${apiKey}&appId=${appId}&lang=en_us`
}
