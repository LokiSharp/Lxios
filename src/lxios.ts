import { LxiosPromise, LxiosRequestConfig, LxiosResponse } from './types/lxios'
import xhr from './xhr'
import { buildURL } from './helpers/url'
import { transformRequest, transformResponse } from './helpers/data'
import { processHeaders } from './helpers/headers'

function lxios(config: LxiosRequestConfig): LxiosPromise {
  processConfig(config)
  return xhr(config).then(res => {
    return transformResponseData(res)
  })
}

function processConfig(config: LxiosRequestConfig): void {
  config.url = transformURL(config)
  config.headers = transformHeaders(config)
  config.data = transformRequestData(config)
}

function transformURL(config: LxiosRequestConfig): string {
  const { url, params } = config
  return buildURL(url, params)
}

function transformRequestData(config: LxiosRequestConfig): any {
  return transformRequest(config.data)
}

function transformHeaders(config: LxiosRequestConfig): any {
  const { headers = {}, data } = config
  return processHeaders(headers, data)
}

function transformResponseData(res: LxiosResponse): LxiosResponse {
  res.data = transformResponse(res.data)
  return res
}

export default lxios
