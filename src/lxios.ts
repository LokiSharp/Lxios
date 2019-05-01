import {LxiosRequestConfig} from "./types/lxios";
import xhr from './xhr'
import {buildURL} from "./helpers/url";
import {transformRequest} from "./helpers/data";
import {processHeaders} from "./helpers/headers";

function lxios(config: LxiosRequestConfig): void {
  processConfig(config);
  xhr(config)
}

function processConfig(config: LxiosRequestConfig): void {
  config.url = transformURL(config);
  config.headers = transformHeaders(config);
  config.data = transformRequestData(config);
}

function transformURL(config: LxiosRequestConfig): string {
  const {url, params} = config;
  return buildURL(url, params)
}

function transformRequestData(config: LxiosRequestConfig): any {
  return transformRequest(config.data)
}

function transformHeaders(config: LxiosRequestConfig): any {
  const {headers = {}, data} = config;
  return processHeaders(headers, data)
}

export default lxios
